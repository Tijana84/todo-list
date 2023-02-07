import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoForm = () => {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("description", JSON.stringify(description));
    localStorage.setItem("isDone", JSON.stringify(false));
    handleCancel();
  };

  const handleCancel = () => {
    navigation("/todo-list");
  };

  return (
    <>
      <div className="flex justify-between p-5" id="add-task">
        <button
          onClick={handleCancel}
          className="bg-white text-black text-base h-8 w-24 rounded-md"
        >
          Cancel
        </button>
        <button
          className="bg-black text-white text-base h-8 w-24 rounded-md"
          onClick={(e) => handleSubmit(e)}
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
        <input
          type="text"
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
