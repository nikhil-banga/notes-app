// import React from "react";
import noteContext from "./noteContext";
import { useEffect, useState } from "react";
export const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const s1={
  //     "name":"Nikhil",
  //     "class": "5b"
  // }
  // const [state, setState] = useState(s1);
  // const update =()=>{
  //     setTimeout(() => {
  //         setState(
  //             {
  //                 "name":"Banga",
  //                 "class": "10b"
  //             }
  //         )
  //     }, 1000);
  // }
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  //add a note
  const addNote = async (title, description, tag) => {
    const respose = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    const note = await respose.json();
    // console.log(json);
    
    setNotes(notes.concat(note));
  };
  const getNotes = async () => {
    const respose = await fetch(
      `${host}/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token'),
        },
      }
    );
    const json = await respose.json();
    setNotes(json);
  };
  //delete a note
  const deleteNote = async(id) => {
    
    // console.log("Deleting the note with id"+id);
    // const array = ids.split(',');
    // for(i =0;i<array.length;i++){
    //   let id = array[i];
        const respose = await fetch(
          `${host}/api/notes/deletenote/${id}`,

          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":
              localStorage.getItem('token'),
            },
          }
          )
        // }
    ;
   respose.json();
    // setNotes(json)
    // console.log(json)
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //logic to edit in api using array named notes
    const respose = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token'),
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    respose.json();
    // console.log(json)
  let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };
  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote,getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
