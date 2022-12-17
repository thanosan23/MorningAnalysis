import React from "react";

const Todo = ({ task }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl my-6 w-[600px] h-fit flex justify-center items-center hover:bg-green-300">
      <h1 className="text-4xl font-bold px-20 py-10 tracking-wide text-[#797D7D]">
        {task}
      </h1>
    </div>
  );
};

export default Todo;
