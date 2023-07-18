import { createSlice } from "@reduxjs/toolkit";
export const NoteSLice = createSlice({
  name: "NoteSlice",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const newNote = { id: new Date(), title: action.payload.title };
      state.push(newNote);
    },
  },
});
export const { addNote } = NoteSLice.actions;
export default NoteSLice.reducer;
