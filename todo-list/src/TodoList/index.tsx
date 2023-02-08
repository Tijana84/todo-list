import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const navigation = useNavigate();
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const tasks =  JSON.parse(localStorage.getItem("tasks") || "[]");

console.log(tasks)
 const title = "";
 const description = "";
  const handleChangeChecked = () => {
    setChecked(!setChecked);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handlePlus = () => {
    navigation("/todo-form");
  };

  return (
    <div>
      <div className="flex justify-between p-5 mb-6">
        <span className="text-4xl">todo</span>
        <button onClick={handlePlus} className="text-4xl">
          +
        </button>
      </div>
      <div className="flex px-2 mb-10">
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-violet"></button>
          <a href="work" className="ml-2 text-sm">
            work
          </a>
        </div>
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-blue"></button>
          <a href="work" className="ml-2 text-sm">
            stydy
          </a>
        </div>
        <div className="flex mr-4">
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
      {title && description ? (
        <div className="bg-yellow rounded-lg mx-2 relative">
          <div className="flex justify-between items-end">
            <h1 className="text-lg font-semibold p-2">{title}</h1>
            <button
              className="p-2 text-grey"
              onClick={() => setHidden((s) => !s)}
            >
              ...
            </button>
            {!hidden ? (
              <div className="flex flex-col items-end p-2 absolute top-0 right-4">
                <button
                  onClick={() => handleEdit()}
                  className="bg-white h-10 w-32 rounded-xl mb-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="bg-white h-10 w-32 rounded-xl"
                >
                  Delete
                </button>
              </div>
            ) : null}
          </div>
          <p className="text-sm mb-2 p-2">{description}</p>
          <div className="flex justify-end p-2">
            <label htmlFor="" className="mr-1 text-xs text-grey">
              done
            </label>
            <input
              type="checkbox"
              className="text-grey rounded-lg"
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;
