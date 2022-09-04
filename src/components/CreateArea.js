import React, { useState } from "react";
import "./CreateArea.css";
import { Fab, Hidden, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [toShow, setToShow] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function displayTitle() {
    setToShow(true);
  }

  return (
    <div>
      <form className="create-note">
        {toShow&&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={toShow?3:1}
          onClick={displayTitle}
        />
        <Zoom in={toShow}>
          <Fab
            onClick={submitNote}
          >
            <AddIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
