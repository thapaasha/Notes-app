import React, { useState, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Navigate } from "react-router-dom";
import Cards from "./Cards";
import WriteNote from "./WriteNote";

function AllNotes() {
  const [isOn, setIsOn] = useState(false);
  // const storedTexts = JSON.parse(localStorage.getItem("text"));

  // useEffect(() => {
  //   localStorage.setItem("text", JSON.stringify(text));
  // }, [text]);
  const createNote = () => {
    setIsOn(true);
  };
  return (
    <div className="bg-[#7D5DA6] h-screen">
      <div className="p-[2rem]">
        <div>
          <h1>My Notes</h1>
          <div>Search</div>
        </div>
        <div>
          <Cards />
        </div>
        <div className="">
          <PlusCircleIcon className="h-6 w-6 text-black" onClick={createNote} />
        </div>
        {isOn && <Navigate to="/newnote"></Navigate>}
      </div>
    </div>
  );
}

export default AllNotes;
