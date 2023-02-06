import React, { useState } from "react";

export const TodoList = () => {
  const [cheked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(true);


  const handleChangeChecked = () => {
    setChecked(!setChecked);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div id="#todo-list">
      <div className="flex justify-between p-5">
        <span className="text-4xl">todo</span>
        <a href="todo-form" className="text-4xl">
          +
        </a>
      </div>
      <div className="flex px-2 mt-6">
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
      <div className="bg-yellow rounded-lg mt-10 mx-2">
        <div className="flex justify-between items-end">
          <h1 className="text-lg font-semibold p-2">The first task title</h1>
          <button
            className="p-2 text-grey"
            onClick={() => setHidden((s) => !s)}
          >
            ...
          </button>
          {!hidden ? (
            <div>
              <div id="" className="flex flex-col items-end p-2">
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
            </div>
          ) : null}
        </div>
        <p className="text-sm mb-2 p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis at
          blanditiis error reprehenderit amet laboriosam facere libero! Qui,
          modi recusandae nisi illum nostrum obcaecati delectus.
        </p>
        <div className="flex justify-end p-2">
          <label htmlFor="" className="mr-1 text-xs text-grey">
            done
          </label>
          <input
            type="checkbox"
            className="text-grey rounded-lg"
            onChange={handleChangeChecked}
          />
        </div>
      </div>
      <div className="bg-yellow rounded-lg mt-10 mx-2">
        <div className="flex justify-between items-end">
          <h1 className="text-lg font-semibold p-2">The second task title</h1>
          <button
            className="p-2 text-grey"
            onClick={() => setHidden((s) => !s)}
          >
            ...
          </button>
          {!hidden ? (
            <div>
              <div className="flex flex-col items-end p-2">
                <button
                  onClick={() => handleEdit()}
                  className="bg-white h-10 w-32 rounded-xl mb-1"
                >
                  Edit
                </button>
                <button className="bg-white h-10 w-32 rounded-xl">
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <p className="text-sm mb-2 p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis at
          blanditiis error reprehenderit amet laboriosam facere libero! Qui,
          modi recusandae nisi illum nostrum obcaecati delectus.
        </p>
        <div className="flex justify-end p-2">
          <label htmlFor="" className="mr-1 text-xs text-grey">
            done
          </label>
          <input
            type="checkbox"
            className="text-grey rounded-lg"
            onChange={handleChangeChecked}
          />
        </div>
      </div>
      <div className="bg-yellow rounded-lg mt-10 mx-2">
        <div className="flex justify-between items-end">
          <h1 className="text-lg font-semibold line-through p-2">
            The third task title
          </h1>
          <button
            className="p-2 text-grey"
            onClick={() => setHidden((s) => !s)}
          >
            ...
          </button>
          {!hidden ? (
            <div>
              <div id="" className="flex flex-col items-end p-2">
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
            </div>
          ) : null}
        </div>
        <p className="text-sm mb-2 line-through p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis at
          blanditiis error reprehenderit amet laboriosam facere libero! Qui,
          modi recusandae nisi illum nostrum obcaecati delectus.
        </p>
        <div className="flex justify-end p-2">
          <label htmlFor="" className="mr-1 text-xs text-grey">
            done
          </label>
          <input
            type="checkbox"
            className="text-grey rounded-lg"
            onChange={handleChangeChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
