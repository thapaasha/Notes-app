import { createSlice } from "@reduxjs/toolkit";
export const NoteSLice = createSlice({
  name: "NoteSlice",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: new Date(),
        title: action.payload.title,
      };
      state.push(newNote);
    },

    deleteNote: (state, action) => {
      return state.filter((newNote) => newNote.title !== action.payload.title);
    },
  },
});
export const { addNote, deleteNote } = NoteSLice.actions;
export default NoteSLice.reducer;
