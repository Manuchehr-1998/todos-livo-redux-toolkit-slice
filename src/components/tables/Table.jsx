import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

export const Table = ({ title, id, index }) => {
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
          <button>Edit</button>
        </td>
      </tr>
    </>
  );
};
