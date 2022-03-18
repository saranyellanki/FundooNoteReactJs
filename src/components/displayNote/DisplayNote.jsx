import { Card, Input } from '@mui/material';
import React from 'react';
import Icons from '../icons/Icons';
import './DisplayNote.scss';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import NoteService from '../../service/NotesService';

const noteService = new NoteService();

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const DisplayNote = (props) => {

  const [open, setOpen] = React.useState(false);
  const [color,setcolor] = React.useState(props.color)

  const [dialogNote, dialogSetNotes] = React.useState({
    title: props.title,
    content: props.description,
  });

  const onTextChange = (e) => {
    dialogSetNotes(() => (
      { ...dialogNote, [e.target.name]: e.target.value }
    ))
  }

  const changeColor = (data) => {
    setcolor(data);
    props.getNotes();
  }

  const addArchive = () => {
    let data = {
      "_id" : props.id,
      "Title": props.title,
      "Description": props.description,
      "Color": props.color,
      "isArchieved" : `${!(props.archive)}`,
      "isDeleted": props.trash
    }
    noteService.updateNote(data)
    .then((res) => {
      props.getNotes();
    }).catch((err) => {
      console.log(err);
    })
  }

  const noteDelete = () => {
    let data = {
      "_id" : props.id,
      "Title": props.title,
      "Description": props.description,
      "Color": props.color,
      "isArchieved" : props.archive,
      "isDeleted": `${!(props.trash)}`,
    }
    noteService.updateNote(data)
    .then((res) => {
      console.log(res.data);
      props.getNotes();
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    let data = {
      "_id": props.id,
      "Title": dialogNote.title,
      "Description": dialogNote.content,
    }
    noteService.updateNote(data)
    .then((res) => {
      props.getNotes();
    }).catch((err) => {
      console.log(err);
    })
  };

  return <div className='allNotes'>
    <div className='noteBox-container'>
      <Card style={{ boxShadow: 'inset 0 0 1px 1px rgb(0 0 0 / 10%)', backgroundColor: props.color }}>
        <div style={{ padding: '10px' }} onClick={handleClickOpen}>
          <div>
            {props.title}
          </div>
        </div>
        <div style={{ padding: '10px' }} onClick={handleClickOpen}>
          <p>
            {props.description}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Icons mode='update' updateMode={(data) => changeColor(data.Color)} addArchive={addArchive} noteDelete={noteDelete} arrId={props.id}/>
        </div>
      </Card>
      <Dialog onClose={handleClose} open={open}>
        <Card style={{ boxShadow: '0 1px 7px rgb(134, 134, 134)', backgroundColor: props.color }} className='cards-container'>
          <div className='cardOpen'>
            <Input
              className='addnoteinput'
              type='text'
              placeholder='Title'
              style={{ fontFamily: 'DM Sans' }}
              disableUnderline
              name='title'
              value={dialogNote.title}
              onChange={onTextChange} />
          </div>
          <div className='input-container'>
            <Input
              className='addnotetext'
              type='text'
              placeholder='Note'
              style={{ fontFamily: 'DM Sans' }}
              disableUnderline
              multiline
              name='content'
              value={dialogNote.content}
              onChange={onTextChange} />
          </div>
          <div className='footer-container'>
            <div className='icons-container'>
              <Icons mode='update' updateMode={(data) => changeColor(data.Color)} addArchive={addArchive} noteDelete={noteDelete} arrId={props.id} />
            </div>
            <div className='footer-button'>
              <button className='btn-close' style={{backgroundColor:props.color}} onClick={handleClose}>Close</button>
            </div>
          </div>
        </Card>
      </Dialog>
    </div>
  </div >;
}

export default DisplayNote;