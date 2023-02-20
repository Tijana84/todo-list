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
    navigation("/edit-form/" + index);
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
      {tasks.map((data: any, index: number) => {
        const classLabel = twMerge(
          "text-lg font-semibold p-2",
          data.isDone ? "line-through" : ""
        );
        const classDescription = twMerge(
          "text-sm mb-2 p-2",
          data.isDone ? "line-through" : ""
        );
        return (
          <div key={index} className="bg-yellow rounded-lg m-2 relative">
            {tasks.map((name: any, index: number) => {})}
            <div className="flex justify-between items-end" key={index}>
              <h1 className={classLabel}>{data.title}</h1>
              <button
                className="p-2 text-grey"
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
                  className="flex flex-col items-end p-2 absolute top-0 right-4"
                >
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-white h-10 w-32 rounded-xl mb-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-white h-10 w-32 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
            <p className={classDescription}>{data.description}</p>
            <div className="flex justify-end p-2">
              <label htmlFor="" className="mr-1 text-xs text-grey">
                done
              </label>
              <input
                checked={data.isDone}
                name="isDone"
                type="checkbox"
                className="text-grey rounded-lg"
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
