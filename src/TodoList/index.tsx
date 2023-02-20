import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const TodoList = () => {
  const navigation = useNavigate();
  const [hidden, setHidden] = useState<any>({});

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const handleChecked = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleEdit = (index: number) => {
    navigation("/todo-edit/" + index);
  };

  const handleDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handlePlus = () => {
    navigation("/todo-form");
  };

  return (
    <div>
      <div className="flex justify-between p-4 mb-8">
        <span className="text-4xl text-black">todo</span>
        <button onClick={handlePlus} className="text-4xl text-black">
          +
        </button>
      </div>
      <div className="flex items-center px-4 mb-8">
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-violet"></button>
          <a href="work" className="ml-2 text-sm text-black">
            work
          </a>
        </div>
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-blue"></button>
          <a href="work" className="ml-2 text-sm text-black">
            stydy
          </a>
        </div>
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-red"></button>
          <a href="work" className="ml-2 text-sm text-black">
            entertainmet
          </a>
        </div>
        <div className="flex mr-4">
          <button className="h-6 w-6 rounded-full bg-green"></button>
          <a href="work" className="ml-2 text-sm text-black">
            family
          </a>
        </div>
      </div>
      {tasks.map((data: any, index: number) => {
        const classLabel = twMerge(
          "text-base text-black font-semibold mt-4",
          data.isDone ? "line-through" : ""
        );
        const classDescription = twMerge(
          "text-sm text-black text-justify p-4",
          data.isDone ? "line-through" : ""
        );
        return (
          <div key={index} className="bg-yellow rounded-lg m-2 mb-6 relative">
            {tasks.map((name: any, index: number) => {})}
            <div className="flex justify-between items-end px-4" key={index}>
              <h1 className={classLabel}>{data.title}</h1>
              <button
                className="text-grey text-3xl"
                onClick={() =>
                  setHidden({
                    ...hidden,
                    [index]: !hidden[index],
                  })
                }
              >
                ...
              </button>
              {hidden[index] ? (
                <div
                  key={index}
                  className="flex flex-col items-end p-2 absolute top-8 right-0"
                >
                  <button
                    onClick={() => handleEdit(index)}
                    className="flex items-center pl-4 bg-white h-12 w-36 rounded-t-lg mb-0.5 text-grey text-sm font-semibold"
                  >
                    Edit ...
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className=" flex items-center pl-4 bg-white h-12 w-36 rounded-b-lg text-grey text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
            <p className={classDescription}>{data.description}</p>
            <div className="flex justify-end p-2">
              <label htmlFor="" className="mr-1 text-sm text-black">
                done
              </label>
              <input
                checked={data.isDone}
                name="isDone"
                type="checkbox"
                className="text-black bg-yellow rounded-2xl accent-yellow"
                onChange={() => handleChecked(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
