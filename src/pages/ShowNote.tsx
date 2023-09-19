import { Link } from "react-router-dom";
import { useNote } from "../components/NoteLayout";
import ReactMarkdown from "react-markdown";

type ShowNoteProps = {
  onDeleteNote: (id: string) => void;
};
const ShowNote = ({ onDeleteNote }: ShowNoteProps) => {
  const note = useNote();
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{note.title}</h1>
          {note.tags.length > 0 && (
            <div className="flex flex-row gap-2 flex-wrap justify-start items-center max-w-[300px]">
              {note.tags.map((tag) => {
                return (
                  <div
                    key={tag.id}
                    className="bg-blue-500 text-white rounded-md w-fit px-2 text-center"
                  >
                    {tag.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="btn-wrapper  ">
          <Link to={`/${note.id}/edit`}>
            <button className="blue-btn btn" type="button">
              Edit
            </button>
          </Link>

          <button
            onClick={() => {
              onDeleteNote(note.id);
            }}
            className="red-btn btn"
            type="button"
          >
            Delete
          </button>
          <Link to="..">
            <button className="gray-btn btn" type="button">
              Back
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <ReactMarkdown className="mt-3">{note.markdown}</ReactMarkdown>
    </>
  );
};

export default ShowNote;
