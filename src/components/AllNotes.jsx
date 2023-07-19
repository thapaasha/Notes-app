import React, { useState } from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

function AllNotes() {
  const notes = useSelector((state) => state.notes);

  const [searcheditem, setSearchedItem] = useState("");
  const [filteredNote, setFilteredNote] = useState([]);

  const handleSearch = () => {
    const result = notes.filter((item) => item.title.includes(searcheditem));
    setFilteredNote(result);
  };
  return (
    <div className="bg-[#7D5DA6] min-h-screen py-[5rem] px-[3rem] md:px-[6rem] ">
      <div className=" mx-w-[1024px] mx-auto">
        <h1 className="font-semibold text-xl mb-[2rem]">My Notes</h1>
        <div className="flex justify-between">
          <div className="mb-2 ">
            <input
              type="search"
              placeholder="search your notes.."
              value={searcheditem}
              onChange={(e) => setSearchedItem(e.target.value)}
              className="p-2 rounded-md w-auto bg-[#827292] mb-[2rem]"
            ></input>
          </div>
          <div>
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <div>
          {filteredNote.map((note) => (
            <div key={note.title}>
              {" "}
              <p>{note.title}</p>
            </div>
          ))}
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default AllNotes;
