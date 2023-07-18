import React from "react";
import { useSelector } from "react-redux";

function Cards() {
  const notes = useSelector((state) => state.notes);
  return (
    <div>
      {notes.map((note) => (
        <div className="border 2px solid white" key={note.id}>
          <p>{note.id.toString()}</p>
          <p>{note.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
