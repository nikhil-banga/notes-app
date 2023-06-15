import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
// import AddNote from "./AddNote";
// import NoteItem from "./NoteItem";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description,note.tag);
    setNote({title: "",
    description: "",
    tag: ""})
    props.showAlert("Added Successfully","success")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="container mx-auto ">
        <p className="text-3xl font-semibold mb-4">Add Notes</p>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Heading
          </label>
          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="heading"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <input
            type="text"
            value={note.description}
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="description"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            id="tag"
            name="tag"
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="tag"
          />
        </div>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          onClick={handleClick}
          className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
        >
          Add Note  
        </button>
      </form>
    </>
  );
};

export default AddNote;
