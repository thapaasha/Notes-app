import { useDispatch } from "react-redux";
import { addNote } from "../redux/NoteSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function WriteNote() {
  const [text, setText] = useState();
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  const defaultText = "Title: \n\nNote: ";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveHandler = (event) => {
    event.preventDefault();
    if (text) {
      dispatch(
        addNote({
          title: text,
        })
      );
    }
    navigate(-1);
  };

  return (
    <div className="bg-[#7D5DA6] h-screen flex justify-center items-center">
      <div className="">
        <div className="flex justify-end mb-2">
          <button
            type="submit"
            className="border-b-2 border-[#161010] font-semibold"
            onClick={saveHandler}
          >
            Save
          </button>
        </div>
        <div>
          <textarea
            className="bg-[#827292] w-[20rem] h-[20rem]"
            autoComplete="on"
            autoCorrect="on"
            autoFocus={true}
            defaultValue={defaultText}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default WriteNote;
