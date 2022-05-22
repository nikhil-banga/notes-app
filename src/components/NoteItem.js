import React from 'react'
import {Link} from 'react-router-dom'
const NoteItem = (props) => {
   const {note} = props;
  return (
      <div className='col-md-3'>
    <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{note.title} Lorem, ipsum dolor.</h5>
    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aliquam ullam quia iusto. Ea a dolore excepturi iure labore tempore beatae, temporibus nemo nam suscipit, hic rem maiores, odit in dolorum doloremque autem? Itaque?</p>
  </div>
</div>
</div>
  )
}
export default NoteItem