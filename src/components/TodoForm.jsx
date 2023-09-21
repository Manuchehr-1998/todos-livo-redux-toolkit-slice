import { Button } from "@mui/material";
import { addNewTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function TodoForm({handleClose}) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAction = (e) => {
    e.preventDefault()
    dispatch(addNewTodo(text));
    setText("");
    handleClose()
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full max-w-sm" onSubmit={handleAction}>
        <div className="mb-4">
          <input
            className="block w-full px-2 py-1 leading-tight border border-gray-400 rounded appearance-none focus:outline-none focus:border-blue-500"
            placeholder="Title Todo"
            name="title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="contained"
            className="px-4 py-2 font-bold animate__animated animate__slideInDown"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
