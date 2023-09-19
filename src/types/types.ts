export type Note = {
  id: string;
} & NoteData;

export type Tag = {
  id: string;
  label: string;
};
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

//similar to the NoteData type but instead of storing the tags we will store the id of the tags
export type RawNote = {
  id: string;
} & RawNoteData;
export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type simplifiedNote = {
  id: string;
  title: string;
  tags: Tag[];
};

export type EditTagsModalProps = {
  show: boolean;
  handelClose: () => void;
  avavailableTags: Tag[];
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};
