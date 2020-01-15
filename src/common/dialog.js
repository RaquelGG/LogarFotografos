import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({titulo, mensaje, open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/*<Button onClick={handleClose} color="primary">
            Disagree
         </Button>*/}
          <Button onClick={handleClose} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}