import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "../pages/NewNote";
import { Note, NoteData, Tag } from "../types/types";
import NoteList from "../pages/NoteList";
import NoteLayout from "../components/NoteLayout";
import ShowNote from "../pages/ShowNote";
import EditNote from "../pages/EditNote";

type AppRoutesProps = {
  onSubmit: (data: NoteData) => void;
  onUpdateNote: (id: string, data: NoteData) => void;
  onDeleteNote: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
  notesWithTags: Note[];
};
const AppRoutes = ({
  onSubmit,
  onAddTag,
  onDeleteNote,
  onUpdateTag,
  onDeleteTag,
  availableTags,
  notesWithTags,
  onUpdateNote,
}: AppRoutesProps) => {
  return (
    <div className="container xl:max-w-[1250px] py-5 px-6 mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={availableTags}
              onUpdateTag={onUpdateTag}
              onDeleteTag={onDeleteTag}
            />
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
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<ShowNote onDeleteNote={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={onAddTag}
                availableTags={availableTags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
