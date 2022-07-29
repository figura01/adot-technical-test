import React, { FC } from 'react';
import { Modal, Box } from '@mui/material';
import NewDestination from './NewDestination';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  pt: .5,
  px: .5,
  pb: .5,
  focus: 0,
};

const CustomModal: FC<{open: boolean, onCloseModal: () => void}> = (props) => {
  const {open, onCloseModal} = props
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box sx={{...style, width: 400 }}>
        <NewDestination onCloseModal={onCloseModal} />
      </Box>
    </Modal>
  )
}

export default CustomModal;