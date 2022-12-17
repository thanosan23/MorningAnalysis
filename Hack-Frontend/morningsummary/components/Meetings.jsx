import Image from "next/image";
import Profile from "../assets/Ellipse 30.png";
import React from "react";

const Meetings = ({ person, time, day, month, year, importance }) => {
  return (
    <div className="bg-white my-20 w-fit h-fit border rounded-2xl shadow-xl flex-col">
      <span className="flex pt-5 justify-around items-center">
        <h1 className="text-2xl px-28 font-bold tracking-wide">
          Meeting with {person}
        </h1>

        <span className="px-28">
          <Image src={Profile} alt="" width={150} height={150} />
        </span>
      </span>

      <span className="flex pb-5 justify-center ml-[-256px] items-center">
        <span className="text-xl mr-10 font-semibold text-left">
          <p>
            {day} {month} {year}
          </p>
          <p>{time}</p>
        </span>
        <span className="bg-green-500 shadow-lg rounded-[400px] h-fit w-fit">
          <h1 className="px-5 py-3 text-lg font-bold tracking-wide">
            {importance}
          </h1>
        </span>
      </span>
    </div>
  );
};

export default Meetings;
