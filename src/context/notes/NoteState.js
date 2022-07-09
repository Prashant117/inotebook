import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62c46af172a23be81955ba43",
      user: "62c44accbe5aef10c15d7bf6",
      title: "My Schedule",
      description: "Wake up early",
      tag: "Personal",
      date: "2022-07-05T16:46:41.253Z",
      __v: 0,
    },
    {
      _id: "62c92ee377115200557b1f8a",
      user: "62c44accbe5aef10c15d7bf6",
      title: "Wake up",
      description: "Wakeup at 5 AM daily",
      tag: "Daily Routine",
      date: "2022-07-09T07:31:47.161Z",
      __v: 0,
    },
    {
      _id: "62c46af172a23be81955ba43",
      user: "62c44accbe5aef10c15d7bf6",
      title: "My Schedule",
      description: "Wake up early",
      tag: "Personal",
      date: "2022-07-05T16:46:41.253Z",
      __v: 0,
    },
    {
      _id: "62c92ee377115200557b1f8a",
      user: "62c44accbe5aef10c15d7bf6",
      title: "Wake up",
      description: "Wakeup at 5 AM daily",
      tag: "Daily Routine",
      date: "2022-07-09T07:31:47.161Z",
      __v: 0,
    },
    {
      _id: "62c46af172a23be81955ba43",
      user: "62c44accbe5aef10c15d7bf6",
      title: "My Schedule",
      description: "Wake up early",
      tag: "Personal",
      date: "2022-07-05T16:46:41.253Z",
      __v: 0,
    },
    {
      _id: "62c92ee377115200557b1f8a",
      user: "62c44accbe5aef10c15d7bf6",
      title: "Wake up",
      description: "Wakeup at 5 AM daily",
      tag: "Daily Routine",
      date: "2022-07-09T07:31:47.161Z",
      __v: 0,
    },
    {
      _id: "62c46af172a23be81955ba43",
      user: "62c44accbe5aef10c15d7bf6",
      title: "My Schedule",
      description: "Wake up early",
      tag: "Personal",
      date: "2022-07-05T16:46:41.253Z",
      __v: 0,
    },
    {
      _id: "62c92ee377115200557b1f8a",
      user: "62c44accbe5aef10c15d7bf6",
      title: "Wake up",
      description: "Wakeup at 5 AM daily",
      tag: "Daily Routine",
      date: "2022-07-09T07:31:47.161Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
