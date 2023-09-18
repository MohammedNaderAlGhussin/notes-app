import CreateableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

const NoteForm = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 mt-10 mx-auto p-5 lg:w-[70%]">
        <div className="title flex flex-col gap-3 mb-3 sm:flex-row md:gap-0 justify-between">
          <div className="from-wrapper ">
            <label className="label" htmlFor="">
              Title
            </label>
            <input className="input " type="text" placeholder="title..." />
          </div>
          <div className="from-wrapper ">
            <label className="label" htmlFor="">
              Tages
            </label>
            <CreateableReactSelect isMulti className="w-[250px]" />
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
          ></textarea>
        </div>
        <div className="flex flex-row gap-5 justify-end mt-2 ">
          <button
            className="  border border-blue-500 bg-blue-500 hover:bg-blue-700 duration-300 text-white py-2 w-[75px] rounded-md"
            type="submit"
          >
            Save
          </button>
          <Link to="..">
            <button
              className="border border-gray-500 py-2 w-[75px] rounded-md hover:bg-gray-500 hover:text-white duration-300"
              type="button"
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
