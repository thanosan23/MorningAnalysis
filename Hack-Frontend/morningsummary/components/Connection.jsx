import React from "react";
import { BsSpotify, BsMicrosoft } from "react-icons/bs";
import { SiGooglecalendar } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { ImMenu2 } from "react-icons/im";

const Connection = () => {
  return (
    <div className="bg-[#252A34] w-screen h-screen fixed text-white flex flex-col justify-center items-center">
      <span className="flex">
        <h1 className="text-4xl text-[#6979F8] font-bold tracking-wide py-10">
          Connections
        </h1>
      </span>

      <span className=" flex-wrap-reverse flex-col">
        <span className="flex my-10">
          <BsSpotify size={80} className="mx-8" />
          <SiGooglecalendar size={80} className="mx-8" />
          <AiOutlineStock size={80} className="mx-8" />
          <BsMicrosoft size={80} className="mx-8" />
        </span>
        <span className="flex my-10">
          <BsSpotify size={80} className="mx-8" />
          <SiGooglecalendar size={80} className="mx-8" />
          <AiOutlineStock size={80} className="mx-8" />
          <BsMicrosoft size={80} className="mx-8" />
        </span>
      </span>

      <span>
        <h1 className="text-4xl text-[#6979F8] font-bold tracking-wide py-10">
          Sort
        </h1>
        <span className="flex">
          <ImMenu2 size={30} className="translate-y-[4.5px]  mr-5" />{" "}
          <p className="text-3xl">Todo List</p>
        </span>
        <span className="flex">
          <ImMenu2 size={30} className="translate-y-[4.5px]  mr-5" />{" "}
          <p className="text-3xl">Todo List</p>
        </span>
        <span className="flex">
          <ImMenu2 size={30} className="translate-y-[4.5px] mr-5" />{" "}
          <p className="text-3xl">Todo List</p>
        </span>
        <span className="flex">
          <ImMenu2 size={30} className="translate-y-[4.5px]  mr-5" />{" "}
          <p className="text-3xl">Todo List</p>
        </span>
        <span className="flex">
          <ImMenu2 size={30} className="translate-y-[4.5px]  mr-5" />{" "}
          <p className="text-3xl">Todo List</p>
        </span>
      </span>
    </div>
  );
};

export default Connection;
