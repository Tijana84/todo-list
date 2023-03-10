import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import womanUrl from "../images/woman.png";

export const TodoCreate = () => {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("title is required");
    }

    if (!description.trim()) {
      alert("description is required");
    }
    setTitle("");
    setDescription("");

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
    <div
      className="flex flex-col justify-center 
     max-w-screen-xl md:p-10 p-4"
    >
      <div className="flex justify-between items-end w-full mb-8">
        <button
          onClick={handleCancel}
          className="bg-white text-black md:text-lg text-base"
        >
          Cancel
        </button>
        <button
          className="bg-black text-white md:text-lg text-base md:h-10 md:w-32 h-8 w-24 rounded-md"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="md:text-xl text-lg text-black font-semibold mb-4"
        >
          Title
        </label>
        <input
          name="title"
          value={title}
          type="text"
          placeholder="add a title ..."
          className="md:text-base text-sm w-full md:h-12 h-10 bg-yellow rounded-md mb-8 p-4 border-none item-center"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label
          htmlFor="description"
          className="md:text-xl text-lg text-black font-semibold mb-4"
        >
          Description
        </label>
        <textarea
          name="description"
          value={description}
          placeholder="add a decription ..."
          className="md:text-base text-sm w-full md:h-48 h-32 bg-yellow rounded-md resize-none mb-8 p-4"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="md:text-xl text-lg text-black font-semibold mb-5">
          Tags
        </h1>
        <div className="md:flex md:mr-4">
          <button className="flex items-center mb-4">
            <div className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-violet"></div>
            <span className="ml-2 md:text-base text-sm text-black">work</span>
          </button>
          <button className="flex items-center mb-4 md:ml-4">
            <div className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-blue"></div>
            <span className="ml-2 md:text-base text-sm text-black">stydy</span>
          </button>
          <button className="flex items-center mb-4 md:ml-4">
            <div className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-red"></div>
            <span className="ml-2 md:text-base text-sm text-black">
              entertainmet
            </span>
          </button>
          <button className="flex items-center mb-4 md:ml-4">
            <div className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-green"></div>
            <span className="ml-2 md:text-base text-sm text-black">family</span>
          </button>
        </div>
      </div>
      <div className="md:flex hidden">
        <img src={womanUrl} className="md:w-1/5" alt="photo woman rose" />
      </div>
    </div>
  );
};
