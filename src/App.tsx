import { useLocalStorage } from "./hooks/useLocalStorage";
import { useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import { NoteData, RawNote, Tag } from "./types/types";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [tags, notes]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  return (
    <div className="">
      <AppRoutes
        onSubmit={onCreateNote}
        onAddTag={addTag}
        availableTags={tags}
        notesWithTags={notesWithTags}
      />
    </div>
  );
}

export default App;
