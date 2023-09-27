import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=100`
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
  async function (title, { dispatch }) {
    try {
      const todo = {
        title: title.title,
        userId: 1,
        completed: false,
      };
      console.log(todo);
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/todos`,
        todo
      );
      const { data } = res;
      data.id = crypto.randomUUID();
      dispatch(addTodo(data));
    } catch (error) {}
  }
);
export const editNewTodo = createAsyncThunk(
  "todos/editNewTodo",
  async function (payload, { dispatch }) {
    const { id, title } = payload;
    console.log(id);
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { title }
      );
      const data = res.data;
      dispatch(editTodo({ id: data.id, title: data.title }));
    } catch (error) {
      console.error(error)
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
    editTodo(state, action) {
      const { id, title } = action.payload;
      state.todos = state.todos.map(item => {
        if (item.id === id) {
          item.title = title;
        }
        return {id: item.id, title: item.title}
      });
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
export const { removeTodo, addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
