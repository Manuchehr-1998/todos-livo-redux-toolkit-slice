import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";

import { Table } from "./tables/Table";
import { Modal } from "./Modal";
import { CreateModal } from "./CreateModal";
import { Button } from "@mui/material";
import Paginations from "./paginations/Paginations";

const Todos = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
   
  const [currentPage,setCurrentPage]=useState(1)

  const [todosPerpage]=useState(10)

  const dispatch = useDispatch();

  const { todos, loading, error } = useSelector(
    (state) => state.todoSliceReducer
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка</p>;
  }

  const handleOpen = () => {
    setOpenAddModal(true);
  };

  const handleClose = () => {
    setOpenAddModal(false);
  };

  const lastTodosIndex=currentPage+todosPerpage
  const firstTodosIndex=lastTodosIndex-todosPerpage
  const currentTodos=todos.slice(firstTodosIndex,lastTodosIndex)
  
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)

  return (
    <div>
      <div className="flex justify-center mt-5">
      <Button
          variant="contained"
          className="px-4 py-2 font-bold animate__animated animate__slideInDown"
          onClick={handleOpen}
        >
          Add Todos
        </Button>
      </div>
      <CreateModal
        openAddModal={openAddModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <table>
        <caption className="m-4">Todos</caption>
        <thead className="border-solid border-2 border-slate-500 p-2">
          <tr className="border-solid border-2 text-center border-slate-500 p-2   ">
            <th className="border-solid border-2 border-slate-500 p-2">№</th>
            <th className="border-solid border-2 border-slate-500 p-2">
              Title
            </th>
            <th className="p-2 grid col-span-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map((todo, index) => (
            <Table index={index} key={index} {...todo} />
          ))}
        </tbody>
      </table>
      <Paginations
      currentPage={currentPage}
      todosPerpage={todosPerpage}
      totalTodos={todos.length}
      paginate={paginate}
      />
    </div>
  );
};

export default Todos;
