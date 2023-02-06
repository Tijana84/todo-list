import React from "react";
import { useState } from "react";

export const Home = () => {
  const [hidden, setHidden] = useState(true);
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
        <a
          type="button"
          href="todo-list"
          className="h-8 w-32 bg-black text-white tex-base flex justify-center items-center rounded-md"
        >
          Get Started
        </a>
        <img
          src="https://www.fashion.hr/EasyEdit/UserFiles/News/kulturaumjetnostdivne-ilustracije-koje-ce-vam-dopustiti-da-u-njima-p/kulturaumjetnostdivne-ilustracije-koje-ce-vam-dopustiti-da-u-njima-p-637634941012366625_467_467.jpeg"
          className="w-44 h-44 md:w-96 md:h-96 mt-16"
          alt="friends"
        />
      </div>
    </div>
  );
};

export default Home;
