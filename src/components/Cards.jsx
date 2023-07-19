import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteNote } from "../redux/NoteSlice";

const getLocalItems = () => {
  const items = localStorage.getItem("text");
  if (items) {
    try {
      return JSON.parse(items);
    } catch (error) {
      console.error("Error parsing local storage items:", error);
      return [];
    }
  }
  return [];
};
function Cards() {
  const [isOn, setIsOn] = useState(false);
  const createNote = () => {
    setIsOn(true);
  };
  // const [notes, setNotes] = useState([]);

  useEffect(() => {
    const localItems = getLocalItems();
    // setNotes(localItems);
  }, []);
  const dispatch = useDispatch();
  const deleteHandler = (note) => {
    dispatch(deleteNote({ id: note.title }));
  };

  const notes = useSelector((state) => state.notes);
  // const [notes, setNotes] = useState(getLocalItems);
  return (
    <div className="flex flex-col">
      <div className="grid gap-5 md:grid-cols-3 items-center">
        {notes.map((note) => (
          <div
            className="bg-[#FFFFFF] my-2 p-4 rounded-lg overflow-hidden"
            key={note.id}
          >
            <div>
              <p className="mb-2">{note.id.toString()}</p>
              <p>{note.title}</p>
            </div>

            <div className="flex justify-end">
              {" "}
              <TrashIcon
                class="h-6 w-6 text-black-500"
                onClick={deleteHandler}
              />
            </div>
          </div>
        ))}
      </div>
      {isOn && <Navigate to="/newnote"></Navigate>}
      <div className="flex justify-end">
        <PlusCircleIcon
          className="h-10 w-10 text-black hover:cursor"
          onClick={createNote}
        />
      </div>
    </div>
  );
}

export default Cards;
