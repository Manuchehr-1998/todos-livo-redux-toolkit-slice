import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Zoom,
} from "@mui/material";
import TodoForm from "./TodoForm";
import { CreateModal } from "./CreateModal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export const Modal = ({ openAddModal, handleClose,handleOpen }) => {
  return (
    <>
      <div className="flex justify-center p-4">
        <Button
          variant="contained"
          className="px-4 py-2 font-bold animate__animated animate__slideInDown"
          onClick={handleOpen}
        >
          Add Todos
        </Button>
      </div>
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
        <DialogContent><CreateModal handleClose={handleClose}/></DialogContent>
      </Dialog>
    </>
  );
};
