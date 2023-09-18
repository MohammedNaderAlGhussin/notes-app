import CreateableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";
import { NoteData, Tag } from "../types/types";
import { v4 as uuidV4 } from "uuid";

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const NoteForm = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const navigate = useNavigate();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markDownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="from-container">
        <div className="title flex flex-col gap-3 mb-3 sm:flex-row md:gap-0 justify-between">
          <div className="from-wrapper ">
            <label className="label" htmlFor="">
              Title
            </label>
            <input
              className="input "
              type="text"
              placeholder="title..."
              ref={titleRef}
              required
            />
          </div>
          <div className="from-wrapper ">
            <label className="label" htmlFor="">
              Tages
            </label>
            <CreateableReactSelect
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onCreateOption={(label) => {
                const newTag = { id: uuidV4(), label };
                onAddTag(newTag);
                setSelectedTags((prev) => [...prev, newTag]);
              }}
              options={availableTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
              isMulti
              className="w-[250px]"
            />
          </div>
        </div>
        <div className="from-wrapper ">
          <label className="label" htmlFor="">
            Body
          </label>
          <textarea
            className="input w-full  resize-none"
            name=""
            id=""
            rows={10}
            placeholder="Type something..."
            ref={markDownRef}
            required
          ></textarea>
        </div>
        <div className="btn-wrapper ">
          <button className="blue-btn" type="submit">
            Save
          </button>
          <Link to="..">
            <button className="gray-btn" type="button">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
