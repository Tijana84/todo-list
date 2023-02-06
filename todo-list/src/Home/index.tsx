import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroUrl from "../images/hero.png";

export const Home = () => {
  const navigation = useNavigate();
  const [hidden, setHidden] = useState(true);

  const handleGetStarted = () => {
    navigation("/todo-list");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-48">
        <h1 className="text-6xl mb-8">
          <span className="text-blue font-semibold">t</span>
          <span className="text-red font-semibold">o</span>
          <span className="text-green font-semibold">d</span>
          <span className="text-violet font-semibold">o</span>
        </h1>
        <p className=" text-base text-center p-4 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus
          atque commodi. Ad unde, nisi commodi est aspernatur enim quo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          type="button"
          onClick={handleGetStarted}
          className="h-8 w-32 bg-black text-white tex-base flex justify-center items-center rounded-md"
        >
          Get Started
        </button>
        <img
          src={heroUrl}
          className="w-44 h-44 md:w-96 md:h-96 mt-16"
          alt="friends"
        />
      </div>
    </div>
  );
};

export default Home;
