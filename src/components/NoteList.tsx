import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../types/types";

type NoteListProps = {
  availableTags: Tag[];
};
const NoteList = ({ availableTags }: NoteListProps) => {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <div className="from-container mt-0 gap-10">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">Notes</h1>
        <div className="btn-wrapper ">
          <Link to="/new">
            <button className="blue-btn" type="button">
              Create
            </button>
          </Link>
          <button className="gray-btn w-[80px]" type="button">
            Edit Tags
          </button>
        </div>
      </div>
      <div className="title flex flex-col gap-3 mb-3 sm:flex-row md:gap-0 justify-between">
        <div className="from-wrapper ">
          <label className="label" htmlFor="">
            Title
          </label>
          <input
            className="input "
            type="text"
            placeholder="title..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="from-wrapper ">
          <label className="label" htmlFor="">
            Tages
          </label>
          <ReactSelect
            value={selectedTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
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
    </div>
  );
};

export default NoteList;
