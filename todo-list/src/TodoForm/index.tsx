import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const TodoForm = () => {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks.push({
      title,
      description,
      isDone: false,
    });

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    handleCancel();
  };

  const handleCancel = () => {
    navigation("/todo-list");
  };

  return (
    <>
      <div className="flex justify-between p-5">
        <button
          onClick={handleCancel}
          className="bg-white text-black text-base h-8 w-24 rounded-md"
        >
          Cancel
        </button>
        <button
          className="bg-black text-white text-base h-8 w-24 rounded-md"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col mt-16 ml-8">
        <label htmlFor="title" className="text-xl mb-4">
          Title
        </label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="add a title..."
          className="w-80 h-10 bg-yellow rounded-md mb-8 p-5 border-none"
        />
        <label htmlFor="title" className="text-xl mb-4">
          Description
        </label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          placeholder="add a decription ..."
          className="w-80 h-32 bg-yellow rounded-md mb-8 p-5"
        />
      </div>
      <div className="flex flex-col p-5">
        <h1 className="text-xl font-semibold mb-5">Tag</h1>
        <div className="flex mr-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-violet"></button>
          <a href="work" className="ml-2 text-sm">
            work
          </a>
        </div>
        <div className="flex mr-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-blue"></button>
          <a href="work" className="ml-2 text-sm">
            stydy
          </a>
        </div>
        <div className="flex mr-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-red"></button>
          <a href="work" className="ml-2 text-sm">
            entertainmet
          </a>
        </div>
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-green"></button>
          <a href="work" className="ml-2 text-sm">
            family
          </a>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
