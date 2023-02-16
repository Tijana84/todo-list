import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const EditForm = () => {
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
      <div className="flex justify-between p-5">
        <button
          onClick={handleCancel}
          className="bg-white text-black text-base h-8 w-24 rounded-md"
        >
          Cancel
        </button>
        <button
          className="bg-blue text-white text-base h-8 w-24 rounded-md"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <div className="flex flex-col mt-16 ml-8">
        <label htmlFor="title" className="text-xl mb-4">
          Title
        </label>
        <input
          type="text"
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          placeholder="add a title..."
          className="w-80 h-10 bg-yellow rounded-md mb-8 p-5 border-none"
        />
        <label htmlFor="title" className="text-xl mb-4">
          Description
        </label>
        <textarea
          onChange={(event) => setEditDescription(event.target.value)}
          placeholder="add a decription ..."
          className="w-80 h-32 bg-yellow rounded-md mb-8 p-5"
          value={editDescription}
        />
      </div>
    </>
  );
};

export default EditForm;
