import React from "react";
import TodoForm from "./TodoForm";
import { useDispatch } from "react-redux";
import { addNewTodo, editNewTodo } from "../redux/todoSlice";
import { Modal } from "./Modal";

export const CreateModal = ({ handleClose, openAddModal,handleOpen }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addNewTodo(data));
    handleClose();
  };

  return (
    <Modal
      handleClose={handleClose}
      openAddModal={openAddModal}
      handleOpen={handleOpen}
    >
      <TodoForm onSubmit={onSubmit} />
    </Modal>
  );
};
