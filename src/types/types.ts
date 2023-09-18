export type Note = {
  id: string;
} & NoteData;

export type Tag = {
  id: string;
  label: string;
};
export type NoteData = {
  title: string;
  body: string;
  tags: Tag[];
};
