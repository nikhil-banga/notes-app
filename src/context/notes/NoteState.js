// import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";
export const NoteState=(props)=>{
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
    const notesInitial =
        [
            {
              "_id": "628a3592d393a7bdc66f6f25",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "1",
              "description": "2",
              "tag": "asdf",
              "date": "2022-05-22T13:07:30.510Z",
              "__v": 0
            },
            {
              "_id": "628a3599d393a7bdc66f6f27",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "3",
              "description": "4",
              "tag": "asdf",
              "date": "2022-05-22T13:07:37.743Z",
              "__v": 0
            },
            {
              "_id": "628a3599d393a7bdc66f6f27",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "3",
              "description": "4",
              "tag": "asdf",
              "date": "2022-05-22T13:07:37.743Z",
              "__v": 0
            },
            {
              "_id": "628a3599d393a7bdc66f6f27",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "3",
              "description": "4",
              "tag": "asdf",
              "date": "2022-05-22T13:07:37.743Z",
              "__v": 0
            },
            {
              "_id": "628a3599d393a7bdc66f6f27",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "3",
              "description": "4",
              "tag": "asdf",
              "date": "2022-05-22T13:07:37.743Z",
              "__v": 0
            },
            {
              "_id": "628a359dd393a7bdc66f6f29",
              "user": "6288c2de303eb2cd1e349c55",
              "title": "5",
              "description": "6",
              "tag": "asdf",
              "date": "2022-05-22T13:07:41.524Z",
              "__v": 0
            }
          ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <noteContext.Provider value ={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;