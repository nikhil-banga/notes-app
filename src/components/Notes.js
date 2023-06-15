import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

export const Notes = (props) => {
    let nav = useNavigate();
    
    const context = useContext(noteContext);
    const { notes, getNotes ,editNote} = context;
    useEffect(() => {
        if(!localStorage.getItem('token')){
            nav("/login")
        }
        else{
            getNotes()
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{
        // console.log("Updating the note...", note)
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click();
        // e.preventDefault(); 
        props.showAlert("Updated Successfully","success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
      <>
        <AddNote showAlert={props.showAlert} />
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-2xl font-semibold"
                  id="exampleModalLabel"
                >
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2d"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  close
                </button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="text-lg font-medium mb-3">
                      Title
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="description"
                      className="text-lg font-medium mb-3"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                      minLength={5}
                      placeholder="new description"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="text-lg font-medium mb-3">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                  onClick={handleClick}
                  type="button"
                  className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3 p-2 text-lg ">
          <h2 className='text-2xl font-semibold mb-3'>Your Notes</h2>
          <div className="container mx-1">
            {notes.length === 0 && "No Notes to display"}
          </div>
          {notes.map((note) => {
            return (
              <Noteitem 
                key={note._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
                note={note}
              />
            );
          })}
        </div>
      </>
    );
}
export default Notes