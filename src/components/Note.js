import React from "react";
import "./Note.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({onDelete, id, title, content}) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
