import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { DUMMY } from "../constants/dummy";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Home: NextPage = () => {
  const [search, setSearch] = useState({
    name: "",
    location: "",
  });
  const filterDummy = (
    dummy: {
      _id: string;
      devices: number;
      name: string;
      wilaya: string;
    }[]
  ) => {
    const dummuRet = dummy.filter(
      (item) =>
        item.name
          .toLocaleLowerCase()
          .includes(search.name.toLocaleLowerCase()) &&
        item.wilaya
          .toLocaleLowerCase()
          .includes(search.location.toLocaleLowerCase())
    );
    return dummuRet;
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="grid grid-cols-3 p-4 h-full gap-4">
      <div className="col-span-2 bg-white rounded-xl shadow p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-4 py-2 flex items-center bg-gray-100 w-fit rounded-xl">
            <input
              className="outline-none text-sm bg-gray-100"
              value={search.name}
              onChange={(e) =>
                setSearch((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Search Name"
            />
            <BsSearch className="text-primary font-bold" />
          </div>
          <div className="px-4 py-2 flex items-center bg-gray-100 w-fit rounded-xl">
            <input
              className="outline-none text-sm bg-gray-100"
              placeholder="Search Location"
              value={search.location}
              onChange={(e) =>
                setSearch((prev) => ({ ...prev, location: e.target.value }))
              }
            />
            <BsSearch className="text-primary font-bold" />
          </div>
        </div>
        <div className="mt-4">
          {filterDummy(DUMMY).map((item, index) => (
            <Link
              href={`/clients/${item._id}`}
              key={item._id}
              className="grid grid-cols-3 p-2"
            >
              <div className="font-medium text-sm">{item.name}</div>
              <div className="text-sm">{item.wilaya}</div>
              <div className="text-sm">{item.devices}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-1 rounded-xl overflow-hidden max-h-screen bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102286.37345708329!2d3.0665130335382527!3d36.75979065661112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6795639515%3A0x4ba4b4c9d0a7e602!2sAlgiers!5e0!3m2!1sen!2sdz!4v1669987706502!5m2!1sen!2sdz"
          width="600"
          height="1000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
