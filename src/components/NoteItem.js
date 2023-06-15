import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="max-w-sm p-4 mr-4 mb-4 bg-white border rounded-lg shadow dark:bg-gray-800 border-gray-700">
        <p href="#" className="flex flex-row ">
          <h5 className="card-title mb-2 flex flex-wrap text-2xl font-bold tracking-tight text-gray-900 ">
            {note.title}
          </h5>
          <p className="ml-36">

          <i
            className="fa-solid fa-trash-can ml-8 m-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Successfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square m-2"
            onClick={() => {
              updateNote(note);
            }}
            ></i>
            </p>
        </p>

        <p className="mb-3 font-normal text-gray-700 ">{note.description}</p>
      </div>
    </>
  );
};
export default NoteItem;
