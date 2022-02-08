import { Card, TextField } from '@mui/material';
import React from 'react';
import Icons from '../icons/Icons';
import './DisplayNote.scss'

const DisplayNote = () => {


  return <div className='allNotes'>
    <div className='noteBox-container'>
        <Card>
          <div>
            <TextField
              variant='standard'
              placeholder='Title'
              InputProps={{
                disableUnderline: true,
                style: { color: '#151515', fontFamily: 'DM Sans', fontWeight: 'normal' }
              }} />
          </div>
          <div>
            <TextField
              variant='standard'
              placeholder='My notes'
              InputProps={{
                disableUnderline: true,
                style: { color: '#151515', fontFamily: 'DM Sans', fontWeight: 'normal' }
              }}
              multiline />
          </div>
          <div>
            <Icons />
          </div>
        </Card>
    </div>
  </div >;
}

export default DisplayNote;