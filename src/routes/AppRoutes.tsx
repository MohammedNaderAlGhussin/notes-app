import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "../pages/NewNote";
import { Note, NoteData, Tag } from "../types/types";
import NoteList from "../components/NoteList";

type AppRoutesProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
  notesWithTags: Note[];
};
const AppRoutes = ({
  onSubmit,
  onAddTag,
  availableTags,
  notesWithTags,
}: AppRoutesProps) => {
  return (
    <div className="container xl:max-w-[1250px] py-5 px-6 mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList notes={notesWithTags} availableTags={availableTags} />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onSubmit}
              onAddTag={onAddTag}
              availableTags={availableTags}
            />
          }
        />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
