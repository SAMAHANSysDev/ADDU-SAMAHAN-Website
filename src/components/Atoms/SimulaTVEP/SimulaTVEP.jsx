import React from "react";

import styles from "./SimulaTVEP.module.scss";
import { Icon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  maxWidth: "75vw",
  bgcolor: 'background.paper',
  border: '5px solid #8C4AC8',
  boxShadow: 24,
  p: 4,
  outline: "none"
};

const SimulaTVEP = ({ epThumbnail, epTitle, epDescription, epCaption }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles["SimulaTVEP"]}>
        <div onClick={handleOpen} className={styles["thumbnail"]} style={{backgroundImage: `url(${epThumbnail})`}}>
          <Icon icon={playFill} color="white" height="50" />
          <p className={styles["smallTitle"]}>{epTitle}</p>
        </div>
        <div className={styles["details"]}>
          <h4>{epTitle}</h4>
          <p>{epDescription}</p>
        </div>
      </div>
        
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {epTitle}: {epDescription}
          </Typography>
          
          <Typography sx={{ mt: 5 }}>
            [LINK COMING SOON]
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {epCaption}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SimulaTVEP;
