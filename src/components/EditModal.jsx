import React from "react";
import TodoForm from "./TodoForm";
import { Modal } from "./Modal";
import { editNewTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

export default function EditModal({ openAddModal, handleClose, title }) {
  const dispatch = useDispatch();

  const onSubmit = () => {
      dispatch(editNewTodo(title));
      handleClose()
      console.log(title);

  };

  return (
    <Modal openAddModal={openAddModal} handleClose={handleClose}>
      <TodoForm onSubmit={onSubmit} title={title} />
    </Modal>
  );
}
