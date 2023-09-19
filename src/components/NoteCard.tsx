import { Link } from "react-router-dom";
import { simplifiedNote } from "../types/types";

const NoteCard = ({ id, title, tags }: simplifiedNote) => {
  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col gap-3 relative justify-center items-center min-h-[120px] p-4 rounded-md border-[1px] border-[#ccc] shadow-md hover:shadow-xl duration-300 hover:translate-y-[-5px] ">
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

export default NoteCard;
