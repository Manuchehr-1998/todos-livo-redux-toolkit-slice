import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Zoom,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export const Modal = ({ openAddModal, handleClose, children }) => {
  return (
    <>
      <Dialog
        open={openAddModal}
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={{
          enter: 1000,
          exit: 700,
        }}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          TodoList
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="float-right"
          >
            X
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};
