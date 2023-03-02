import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import manUrl from "../images/man.png";

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
    if (!editTitle.trim()) {
      alert("title is required");
    }
    if (!editDescription.trim()) {
      alert("description is required");
    }

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
    <div className="flex flex-col justify-center h-screen max-w-screen-xl md:p-10 p-4">
      <div className="flex justify-between items-end w-full mb-8">
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
      <div className="flex flex-col">
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
          className="md:text-base text-sm w-full md:h-12 h-10 bg-yellow rounded-md mb-8 p-4 border-none item-center"
        />
        <label
          htmlFor="title"
          className="md:text-xl text-lg text-black font-semibold mb-4"
        >
          Description
        </label>
        <textarea
          placeholder="edit a decription ..."
          className="md:text-base text-sm w-full md:h-48 h-32 bg-yellow rounded-md resize-none mb-8 p-4"
          value={editDescription}
          onChange={(event) => setEditDescription(event.target.value)}
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
        <img src={manUrl} className="md:w-1/5" alt="photo man" />
      </div>
    </div>
  );
};
