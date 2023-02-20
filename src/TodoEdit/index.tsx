import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <div className="flex justify-between items-end p-4 mt-4">
        <button
          onClick={handleCancel}
          className="bg-white text-black text-base"
        >
          Cancel
        </button>
        <button
          className="bg-black text-white text-base h-8 w-24 rounded-md"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <div className="flex flex-col mt-16 ml-8">
        <label
          htmlFor="title"
          className="text-lg text-black font-semibold mb-4"
        >
          Title
        </label>
        <input
          type="text"
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          placeholder="edit a title..."
          className="text-sm w-80 h-10 bg-yellow rounded-md mb-8 p-4 border-none"
        />
        <label
          htmlFor="title"
          className="text-lg text-black font-semibold mb-4"
        >
          Description
        </label>
        <textarea
          onChange={(event) => setEditDescription(event.target.value)}
          placeholder="add a decription ..."
          className="text-sm w-80 h-32 bg-yellow rounded-md mb-8 p-4"
          value={editDescription}
        />
      </div>
      <div className="flex flex-col ml-8">
        <h1 className="text-lg text-black font-semibold mb-5">Tags</h1>
        <div className="flex items-center ml-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-violet"></button>
          <a href="work" className="ml-2 text-sm text-black">
            work
          </a>
        </div>
        <div className="flex items-center ml-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-blue"></button>
          <a href="work" className="ml-2 text-sm text-black">
            stydy
          </a>
        </div>
        <div className="flex items-center ml-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-red"></button>
          <a href="work" className="ml-2 text-sm text-black">
            entertainmet
          </a>
        </div>
        <div className="flex items-center ml-4 mb-5">
          <button className="h-6 w-6 rounded-full bg-green"></button>
          <a href="work" className="ml-2 text-sm text-black">
            family
          </a>
        </div>
      </div>
    </>
  );
};

export default TodoEdit;
