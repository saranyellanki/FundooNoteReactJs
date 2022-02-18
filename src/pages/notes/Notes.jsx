import React from 'react';
import TakeNote from '../../components/takeNote/TakeNote';
import DisplayNote from '../../components/displayNote/DisplayNote';
import './Notes.scss'
import NoteService from '../../service/NotesService';

const noteService = new NoteService();

const Notes = () => {

  const [notesArr, setNotesArr] = React.useState([]);

  React.useEffect(() => {
    getNotes();
  },[])

  const getNotes = () => {
    noteService.getAllNotes()
    .then((res) => {
      setNotesArr(res.data.data)
    }).catch((err) => {
      console.log(err);
    })  
  }

  return <div>
    <TakeNote closeBtn={getNotes} />
    <div className='display-container'>
      {notesArr.length > 0 && notesArr.map((n, index) => (
        <DisplayNote key={index} arrNote={n} getNotes={getNotes} />
      ))}</div>
  </div>;
}

export default Notes;