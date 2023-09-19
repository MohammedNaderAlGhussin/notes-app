import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../types/types";

type simplifiedNote = {
  id: string;
  title: string;
  tags: Tag[];
};
type NoteListProps = {
  availableTags: Tag[];
  notes: simplifiedNote[];
};
const NoteList = ({ availableTags, notes }: NoteListProps) => {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

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
      <div className="grid grid-cols-full gap-5 overflow-y-auto max-h-[500px] p-5 pb-3">
        {filteredNotes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              tags={note.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;

const NoteCard = ({ id, title, tags }: simplifiedNote) => {
  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col gap-3 justify-center items-center min-h-[100px] p-4 rounded-md border-[1px] border-[#ccc] shadow-md hover:shadow-xl duration-300 hover:translate-y-[-5px] ">
        <h1 className="text-lg">{title}</h1>
        <div className="tags-wrapper flex flex-row gap-2 flex-wrap justify-center items-center">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-blue-500 text-white rounded-md w-fit px-2 text-center"
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
