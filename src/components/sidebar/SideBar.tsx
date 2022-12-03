import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IMAGES } from "../../constants/images";
import { INFO } from "../../constants/info";
import { SIDEBAR } from "../../constants/sidebar";
import { BsDoorClosed, BsDoorClosedFill } from "react-icons/bs";
const SideBar: NextPage = () => {
  const router = useRouter();

  return (
    <div className="col-span-1 px-6 shadow z-50 py-6 flex items-center w-full flex-col">
      <div className="flex w-full items-center gap-y-2 flex-col justify-center">
        <Link href={"/"}>
          <Image
            src={IMAGES.LOGO_CIRCLE}
            alt="logo"
            width={100}
            height={100}
            className="object-contain h-16 cursor-pointer"
          />
        </Link>
        <p className="font-semibold text-xl">{INFO.title}</p>
      </div>
      <div className="flex flex-col w-full gap-y-4 mt-4">
        {SIDEBAR.map((item, index) => (
          <Link
            href={item.path}
            className={`flex items-center rounded gap-x-2 px-4 py-3 hover:bg-opacity-90 transition cursor-pointer ${
              item.path === router.asPath ? "bg-primary" : ""
            }`}
            key={index}
          >
            <item.Icon
              className={`${item.path === router.asPath ? "text-white" : ""}`}
            />
            <span
              className={`${
                item.path === router.asPath ? "text-white" : ""
              } text-sm font-medium`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full mt-auto">
        <div className="flex py-3 gap-x-2 bg-primary text-white rounded hover:bg-opacity-90  items-center px-4 cursor-pointer">
          <BsDoorClosedFill />
          <p className="text-sm font-medium">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
