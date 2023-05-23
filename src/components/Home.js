import React  from "react";
// import AddNote from "./AddNote";
// import React ,{useContext} from "react";
// import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
export const Home = (props) => {
  // const context = useContext(noteContext);
  // const {notes,setNotes}=context;
  return (

    <div className="container mx-auto p-8">

      {/* <AddNote/> */}
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home;