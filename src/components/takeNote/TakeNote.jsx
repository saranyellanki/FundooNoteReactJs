import { BrushOutlined, CheckBoxOutlined, ImageOutlined } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Icons from '../icons/Icons';
import './TakeNote.scss'


const TakeNote = () => {

  const [note, openNote] = useState(true);

  const [notes, setNotes] = useState({
    title: '',
    content: ''
  });

  const setOpen = () => {
    openNote(!note)
  }

  const onTextChange = (e) => {
    setNotes((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }

  return <div className='note-container'>
    {
      note ?
        <div className='card-container' onClick={() => setOpen()} >
          <div className='input-container'>
            <div>
              <Input
                className='addnoteinput'
                type='text'
                placeholder='Take a note...'
                disableUnderline
              />
            </div>
          </div>
          <div className='icon-container'>
            <IconButton><CheckBoxOutlined /></IconButton>
            <IconButton><BrushOutlined /></IconButton>
            <IconButton><ImageOutlined /></IconButton>
          </div>
        </div>
        :
        <div className='cards-container'>
          <div className='cardOpen'>
            <Input
              className='addnoteinput'
              type='text'
              placeholder='Title'
              disableUnderline
              onChange={(e) => onTextChange(e)}
              name='title' />
          </div>
          <div className='input-container'>
            <Input
              className='addnotetext'
              type='text'
              placeholder='Take a note...'
              disableUnderline
              multiline
              onChange={(e) => onTextChange(e)}
              name='content' />
          </div>
          <div className='footer-container'>
            <div className='icons-container'>
              <Icons />
            </div>
            <div className='footer-button'>
              <button className='btn-close' onClick={() => setOpen()}>Close</button>
            </div>
          </div>
        </div>
    }
  </div >
}


export default TakeNote;