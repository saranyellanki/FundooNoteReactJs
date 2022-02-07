import React from 'react';
import { AddAlertOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt1Outlined } from '@mui/icons-material';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import {IconButton} from '@mui/material';

const Icons = () => {
  return <div> 
    <IconButton>
      <AddAlertOutlined fontSize='small' />
    </IconButton>
    <IconButton>
      <PersonAddAlt1Outlined fontSize='small' />
    </IconButton>
    <IconButton>
      <ColorLensOutlined fontSize='small' />
    </IconButton>
    <IconButton>
      <ImageOutlined fontSize='small' />
    </IconButton>
    <IconButton>
      <ArchiveOutlined fontSize='small' />
    </IconButton>
    <IconButton>
      <MoreVertOutlined fontSize='small' />
    </IconButton>
  </div>;
}

export default Icons;