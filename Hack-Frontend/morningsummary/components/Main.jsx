import React from "react";
import Todo from "./Todo.jsx";
import Image from "next/image";
import profile from "../assets/profile.svg";
import Meetings from "./Meetings.jsx";
import Article_Carousel from "./Article_Carousel.jsx";

const Main = () => {
  return (
    <>
      <div className="w-screen h-fit flex flex-col my-20 justify-center items-center">
        <Image src={profile} alt="" width={300} height={300} />

        <h1 className="text-6xl text-center tracking-wider my-20 font-semibold ">
          Welcome Back Olivia!
        </h1>
      </div>

      <div className="w-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wide mb-[50px]">
          Things To Do:
        </h1>

        <Todo task={"Morning Run"} />
        <Todo task={"Go Shopping"} />
        <Todo task={"Work On Bussiness"} />
        <Todo task={"Doctors Appointment"} />
      </div>

      <div className="w-screen my-52 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold tracking-wide">
          Meetings for Today :
        </h1>

        <Meetings
          person={"Sarah"}
          time={"9:30 am"}
          day={"23"}
          month={"May"}
          year={"2022"}
          importance={"Important"}
        />
        <Meetings
          person={"Sarah"}
          time={"9:30 am"}
          day={"23"}
          month={"May"}
          year={"2022"}
          importance={"Important"}
        />
        <Meetings
          person={"Sarah"}
          time={"9:30 am"}
          day={"23"}
          month={"May"}
          year={"2022"}
          importance={"Important"}
        />
      </div>

      <div className="flex justify-center flex-col items-center ">
        <h1 className="text-4xl font-bold tracking-wide">Articles:</h1>
        <Article_Carousel />
      </div>
    </>
  );
};

export default Main;
