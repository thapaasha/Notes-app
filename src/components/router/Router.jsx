import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllNotes from "../AllNotes";
import WriteNote from "../WriteNote";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllNotes />}></Route>
          <Route path="/newnote" element={<WriteNote />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
