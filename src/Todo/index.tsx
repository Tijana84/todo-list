import { useNavigate } from "react-router-dom";
import heroUrl from "../images/hero.png";

export const Todo = () => {
  const navigation = useNavigate();

  const handleGetStarted = () => {
    navigation("/todo-list");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:mt-64 mt-48">
        <h1 className="md:text-7xl text-6xl mb-8">
          <span className="text-blue font-semibold">t</span>
          <span className="text-red font-semibold">o</span>
          <span className="text-green font-semibold">d</span>
          <span className="text-violet font-semibold">o</span>
        </h1>
        <p className="md:text-lg text-base text-center justify-center md:mx-64 p-4 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus
          atque commodi. Ad unde, nisi commodi est aspernatur enim quo.Ad unde,
          nisi commodi est aspernatur enim quo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          type="button"
          onClick={handleGetStarted}
          className="md:h-10 md:w-40 h-8 w-32 bg-black text-white md:text-lg text-base flex justify-center items-center rounded-md mb-12"
        >
          Get Started
        </button>
        <img src={heroUrl} className="mb-48 md:w-1/3 w-80" alt="friends" />
      </div>
    </div>
  );
};

export default Todo;
