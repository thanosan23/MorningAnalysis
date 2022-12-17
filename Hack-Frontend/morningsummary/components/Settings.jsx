import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Settings = () => {
  const [SendPushNotifications, setSendPushNotifications] = useState(true);
  const [DarkTheme, setDarkTheme] = useState(false);

  const DeleteSavedData = () => {};

  return (
    <div className="bg-[#252A34] w-screen h-screen flex fixed justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col justify-center items-left text-white">
          <h1 className="text-4xl text-[#6979F8] font-bold tracking-wide py-10">
            Profile Settings
          </h1>
          <Link
            href="/settings/edit_profile"
            className="text-3xl font-semibold italic py-5 flex"
          >
            Edit Profile
            <span className="translate-y-[5px] ml-8">
              <AiOutlineArrowRight />
            </span>
          </Link>
          <Link
            href="/settings/change_password"
            className="text-3xl font-semibold italic py-5 flex"
          >
            Change Password
            <span className="translate-y-[5px] ml-8">
              <AiOutlineArrowRight />
            </span>
          </Link>
          <span className="flex py-5">
            <label className="text-3xl font-semibold italic ">
              Send Push Notifications
            </label>
            <input
              type="checkbox"
              className="w-[20px] h-[45px] ml-[40px]"
              onChange={(e) => {
                setSendPushNotifications(e);
              }}
            />
          </span>
          <h1 className="text-4xl text-[#6979F8] font-bold tracking-wide py-10">
            Preferences
          </h1>
          <span className="flex py-5">
            <label className="text-3xl font-semibold italic">Dark Theme</label>
            <input
              type="checkbox"
              className="w-[20px] h-[45px] ml-[40px]"
              onChange={(e) => {
                setDarkTheme(e);
              }}
            />
          </span>
          <label
            onClick={DeleteSavedData}
            className="text-3xl font-semibold italic py-5 flex"
          >
            Clear Saved Data
            <span className="translate-y-[5px] ml-8">
              <BsFillTrashFill />
            </span>
          </label>
          <h1 className="text-4xl font-bold tracking-wide py-10 text-[#6979F8]">
            Support
          </h1>
          <Link
            href="/settings/connections"
            className="text-3xl font-semibold italic flex"
          >
            Connections
            <span className="translate-y-[5px] ml-8">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Settings;
