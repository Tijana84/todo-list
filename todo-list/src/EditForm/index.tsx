import React from "react";
import { useState } from "react";

export const EditForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleEdit = () => {};

  return (
    <div>
      <div className="flex justify-end p-5">
        <button
          className="bg-blue text-white text-base flex justify-center items-center h-8 w-24 rounded-md"
          onClick={() => handleEdit()}
        >
          edit
        </button>
      </div>
      <div className="flex flex-col mt-16 ml-8">
        <label htmlFor="title" className="text-xl mb-4">
          Title
        </label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="edit a title..."
          className="w-80 h-10 bg-yellow rounded-md mb-8 p-5 border-none"
        />
        <label htmlFor="title" className="text-xl mb-4">
          Description
        </label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          placeholder="edit a decription ..."
          className="w-80 h-32 bg-yellow rounded-md mb-8 p-5"
        />
      </div>
    </div>
  );
};

export default EditForm;
