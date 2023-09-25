import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";
import EditModal from "../EditModal";

export const Table = ({ title, id, index }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpen = () => {
    setOpenAddModal(true);
  };
  const handleClose = () => {
    setOpenAddModal(false);
  };

  const dispatch = useDispatch();
  return (
    <>
      <tr className="border-solid border-2 border-slate-400">
        <td className="border-solid border-2 border-slate-500 p-2">
          {index + 1}
        </td>
        <td className="border-solid border-2 border-slate-400 p-2">{title}</td>
        <td className="border-solid border-2 border-slate-400 p-2">
          <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </td>
        <td className="border-solid border-2 border-slate-400 p-2">
          <button onClick={handleOpen}>Edit</button>
        </td>
      </tr>
      <EditModal
        openAddModal={openAddModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
        title={title}
      />
    </>
  );
};
