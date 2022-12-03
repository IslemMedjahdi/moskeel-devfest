import { useRouter } from "next/router";
import React from "react";
import SideBar from "../sidebar/SideBar";

const Layout = ({ children }) => {
  const router = useRouter();
  if (router.asPath === "/home") {
    return <div>{children}</div>;
  }
  return (
    <div className="grid text-gray-900 grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-gray-100 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
