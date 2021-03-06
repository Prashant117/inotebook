import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      {" "}
      <div className="row my-5">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
