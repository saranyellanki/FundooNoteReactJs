import { BrushOutlined, CheckBoxOutlined, ImageOutlined } from '@mui/icons-material';
import { IconButton, Input, Card } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Icons from '../icons/Icons';
import './TakeNote.scss'


const TakeNote = (props) => {

  const [note, openNote] = useState(true);

  const [notes, setNotes] = useState({
    title: '',
    content: ''
  });

  const setOpen = () => {
    openNote(!note)
  }

  const saveNote = () => {
    if (notes.title !== '' || notes.content !== '') {
      props.closeBtn(notes);
      setOpen()
      setNotes({
        title: '',
        content: ''
      })
    }
    setOpen()
  }

  const onTextChange = (e) => {
    setNotes((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }

  return <div className='note-container'>
    {
      note ?
        <Card style={{ boxShadow: 'inset 0 0 1px 1px rgb(0 0 0 / 10%)' }} className='card-container' onClick={() => setOpen()} >
          <div className='input-container'>
            <div>
              <Input
                className='addnoteinput'
                type='text'
                placeholder='Take a note...'
                disableUnderline
                style={{ fontFamily: 'DM Sans' }}
              />
            </div>
          </div>
          <div className='icon-container'>
            <IconButton><CheckBoxOutlined /></IconButton>
            <IconButton><BrushOutlined /></IconButton>
            <IconButton><ImageOutlined /></IconButton>
          </div>
        </Card>
        :
        <Card style={{ boxShadow: 'inset 0 0 1px 1px rgb(0 0 0 / 10%)' }} className='cards-container'>
          <div className='cardOpen'>
            <Input
              className='addnoteinput'
              type='text'
              placeholder='Title'
              style={{ fontFamily: 'DM Sans' }}
              disableUnderline
              onChange={onTextChange}
              name='title'
              value={notes.title} />
          </div>
          <div className='input-container'>
            <Input
              className='addnotetext'
              type='text'
              placeholder='Take a note...'
              style={{ fontFamily: 'DM Sans' }}
              disableUnderline
              multiline
              onChange={onTextChange}
              name='content'
              value={notes.content} />
          </div>
          <div className='footer-container'>
            <div className='icons-container'>
              <Icons />
            </div>
            <div className='footer-button'>
              <button className='btn-close' onClick={() => saveNote()}>Close</button>
            </div>
          </div>
        </Card>
    }
  </div >
}


export default TakeNote;