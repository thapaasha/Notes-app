import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";
export default configureStore({
  reducer: {
    notes: NoteSlice,
  },
});
