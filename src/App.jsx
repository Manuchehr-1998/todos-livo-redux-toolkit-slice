import { Button } from "@mui/material";
import "./App.css";
import Todos from "./components/Todos";
import User from "./components/user/User";
import {  Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div className="container flex justify-center w-[100%]">
      <Routes>
     <Route path="/user" element={<User/>}/>
     <Route path="/todos" element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
