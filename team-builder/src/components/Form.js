// import React, { useState } from "react";

// const NoteForm = props => {
//   // console.log("this is our props",props);
//   const [note, setNote] = useState({
//     title: "",
//     body: ""
//   });

//   const handleChanges = e => {
//     setNote({
//       ...note,
//       [e.target.name]: e.target.value
//     });
//     console.log(e.target.name);
//   };
//   const submitForm = e => {
//     e.preventDefault();
//     props.addToTeamList(note);
//     setNote({ title: "", body: "" });
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <label htmlFor="title">Title</label>
//       <input
//         id="title"
//         type="text"
//         placeholder="title"
//         onChange={handleChanges}
//         name="title"
//         value={note.title}
//       />
//       <label htmlFor="body">Body</label>
//       <textarea
//         id="body"
//         name="body"
//         onChange={handleChanges}
//         value={note.body}
//       />
//       <button type="submit">Add Note</button>
//     </form>
//   );
// };

// export default NoteForm;
