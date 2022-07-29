import React, { FC } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import classes from './Header.module.css';

const Header: FC<{onOpenModal: () => void }> = (props) => {
  const { onOpenModal } = props

  const handleClick = () => {
    onOpenModal()
  }
  
  return <header className={classes.header}>
    <Typography variant="h5" component="h6">Destinations</Typography>
    <Button onClick={handleClick} variant="contained" size="small" startIcon={<AddIcon />}>
      Ajouter
    </Button>
  </header>
}

export default Header;