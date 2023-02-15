import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { EditForm } from "./EditForm";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo-list" element={<TodoList />}></Route>
        <Route path="/todo-form" element={<TodoForm />}></Route>
        <Route path="/edit-form" element={<EditForm />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
