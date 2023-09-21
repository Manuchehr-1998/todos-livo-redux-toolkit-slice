import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useId } from "react";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`
      );
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error?.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { dispatch }) {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      dispatch(removeTodo({ id }));
    } catch (error) {
      console.log(error?.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async function (text, { dispatch }) {
    try {
      const todo = {
        title: text,
        userId: 1,
        completed: false,
      };
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/todos`,todo
      );
      const {data}=res
      data.id = crypto.randomUUID()
      dispatch(addTodo(data))
    } catch (error) {

    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: false,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { removeTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
