import { EditTagsModalProps } from "../types/types";

const EditTagsModal = ({
  show,
  handelClose,
  avavailableTags,
  onDeleteTag,
  onUpdateTag,
}: EditTagsModalProps) => {
  return (
    show && (
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000045] z-50">
        <div className="relative bg-white rounded-lg shadow w-[600px] mx-auto  mt-5 ">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Terms of Service
            </h3>
            <button
              type="button"
              onClick={handelClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6 overflow-y-auto max-h-[600px]">
            {avavailableTags.map((tag) => {
              return (
                <form
                  className="flex flex-row justify-between items-center gap-5 "
                  key={tag.id}
                >
                  <input
                    type="text"
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                    className="flex-1 px-4 py-2 rouded-md border border-gray-500 rounded-md focus:outline-blue-500"
                    value={tag.label}
                  />

                  <button
                    onClick={() => onDeleteTag(tag.id)}
                    className="border border-red-500 text-red-500 w-fit py-2 px-4 hover:bg-red-500 hover:text-white duration-300 rounded-md"
                  >
                    &times;
                  </button>
                </form>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default EditTagsModal;
