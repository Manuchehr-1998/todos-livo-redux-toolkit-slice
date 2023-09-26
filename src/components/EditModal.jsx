import React from "react";
import TodoForm from "./TodoForm";
import { Modal } from "./Modal";
import { editNewTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

export default function EditModal({
  openAddModal,
  handleClose,
  title,
  id,
  handleOpen,
}) {

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    dispatch(editNewTodo({ id, title: data.title }));
    handleClose();
  };

  return (
    <Modal
      openAddModal={openAddModal}
      handleClose={handleClose}
      handleOpen={handleOpen}
    >
      <TodoForm onSubmit={onSubmit} title={title} id={id} />
    </Modal>
  );
}
