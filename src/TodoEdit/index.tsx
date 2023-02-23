import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import photo3Url from "../images/photo3.png";

export const TodoEdit = () => {
  const params = useParams();
  const paramIndex = Number(params.index);
  const navigation = useNavigate();
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [editTitle, setEditTitle] = useState(tasks[paramIndex].title);
  const [editDescription, setEditDescription] = useState(
    tasks[paramIndex].description
  );

  const handleEdit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task: any, index: number) => {
      if (paramIndex === index) {
        return { ...task, title: editTitle, description: editDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditTitle("");
    setEditDescription("");
    handleCancel();
  };

  const handleCancel = () => {
    navigation("/todo-list");
  };

  return (
    <>
      <div className="flex justify-between items-end md:p-10 p-4 mt-4">
        <button
          onClick={handleCancel}
          className="bg-white text-black md:text-lg text-base"
        >
          Cancel
        </button>
        <button
          className="bg-black text-white md:text-lg text-base md:h-10 md:w-32 h-8 w-24 rounded-md"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <div className="flex flex-col mt-16 ml-8">
        <label
          htmlFor="title"
          className="md:text-xl text-lg text-black font-semibold mb-4"
        >
          Title
        </label>
        <input
          type="text"
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          placeholder="edit a title ..."
          className="md:text-base text-sm md:w-9/12 md:h-12 w-80 h-10 bg-yellow rounded-md mb-8 p-4 border-none item-center"
        />
        <label
          htmlFor="title"
          className="md:text-xl text-lg text-black font-semibold mb-4"
        >
          Description
        </label>
        <textarea
          onChange={(event) => setEditDescription(event.target.value)}
          placeholder="edit a decription ..."
          className="md:text-base text-sm md:w-9/12 md:h-48 w-80 h-32 bg-yellow rounded-md mb-8 p-4"
          value={editDescription}
        />
      </div>
      <div className="flex flex-col ml-8">
        <h1 className="md:text-xl text-lg text-black font-semibold mb-5">
          Tags
        </h1>
        <div className="md:flex md:mr-4">
          <div className="flex items-center md:ml-12 ml-4 md:bg-yellow md:h-10 md:w-24 md:rounded-md mb-5">
            <button className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-violet md:ml-2"></button>
            <a href="work" className="ml-2 md:text-base  text-sm text-black">
              work
            </a>
          </div>
          <div className="flex items-center md:ml-12 ml-4 md:bg-yellow md:h-10 md:w-24 md:rounded-md mb-5">
            <button className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-blue md:ml-2"></button>
            <a href="work" className="ml-2 text-sm text-black">
              stydy
            </a>
          </div>
          <div className="flex items-center md:ml-12 ml-4 md:bg-yellow md:h-10 md:w-40 md:rounded-md mb-5">
            <button className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-red md:ml-2"></button>
            <a href="work" className="ml-2 md:text-base  text-sm text-black">
              entertainmet
            </a>
          </div>
          <div className="flex items-center md:ml-12 ml-4 md:bg-yellow md:h-10 md:w-24 md:rounded-md mb-5">
            <button className="md:h-7 md:w-7 h-6 w-6 rounded-full bg-green md:ml-2"></button>
            <a href="work" className="ml-2 md:text-base text-sm text-black">
              family
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex hidden">
        <img src={photo3Url} className="md:mx-10 md:w-1/5" alt="photo boy" />
      </div>
    </>
  );
};
