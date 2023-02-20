import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Todo} from "./Todo";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoEdit } from "./TodoEdit";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/todo-list" element={<TodoList />}></Route>
        <Route path="/todo-form" element={<TodoForm />}></Route>
        <Route path="/todo-edit/:index" element={<TodoEdit />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
