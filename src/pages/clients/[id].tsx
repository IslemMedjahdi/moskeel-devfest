import { useRouter } from "next/router";
import React from "react";
import { DUMMY } from "../../constants/dummy";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Switch from "../../components/Switch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "% use of the product",
    },
    maintainAspectRatio: false,
  },
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Number of insects estimated",
    },
    maintainAspectRatio: false,
  },
};

const labels = ["01", "02", "03", "04", "05", "06", "07"];

const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [40, 20, 10, 10, 40, 30, 50],
      borderColor: "#EC6433",
      backgroundColor: "#EC6433",
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      label: "",
      data: [500, 250, 150, 150, 250, 300, 600],
      borderColor: "#EC6433",
      backgroundColor: "#EC6433",
    },
  ],
};

const Client = () => {
  const router = useRouter();
  const client = DUMMY.find((item) => item._id === router.query.id);
  if (client)
    return (
      <div className="grid grid-cols-3 px-4 pb-4 h-full gap-4">
        <div className="px-4 pb-4 col-span-2 ">
          <div className="sticky top-0 bg-gray-100 z-50 pt-10">
            <div className="bg-white p-6  shadow rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <p className="font-semibold">Client Name</p>
                <p>{client.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Main Location</p>
                <p>{client.wilaya}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Device's Total number</p>
                <p>{client.devices}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 mt-6">
            <div className="bg-white w-full gap-2 flex flex-col px-1 py-4 rounded-xl shadow">
              <p className="font-semibold px-2">% use of the product</p>
              <div>
                <Line
                  options={options}
                  data={data}
                  height={null}
                  width={null}
                />
              </div>
            </div>
            <div className="bg-white w-full gap-2 flex flex-col px-1 py-4 rounded-xl shadow">
              <p className="font-semibold px-2">Number of insects estimated</p>
              <div>
                <Line
                  options={options2}
                  data={data2}
                  height={null}
                  width={null}
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mt-6">
            {[
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
              "#21212123556",
            ].map((item, index) => (
              <div className="grid grid-cols-4 w-full my-3 items-center">
                <div className="text-sm font-medium w-fit flex items-center">
                  {item}
                  {index}
                </div>
                <div className={`flex items-center text-sm `}>
                  <p
                    className={`rounded-lg px-2 py-1 ${
                      index % 3 !== 0
                        ? "bg-green-200 text-green-600"
                        : "bg-red-200 text-red-600"
                    }`}
                  >
                    {index % 3 === 0 ? "Disabled" : "Active"}
                  </p>
                </div>
                <div className="w-full flex items-center gap-2">
                  <div className="flex items-center grow rounded-xl overflow-hidden">
                    <div
                      style={{ width: `${[75, 30, 60][index % 3]}%` }}
                      className={`bg-green-600 w-1/2 h-1`}
                    />
                    <div
                      style={{
                        width: `${100 - [75, 30, 60][index % 3]}%`,
                      }}
                      className="bg-gray-300 h-1 w-1/2"
                    />
                  </div>
                  <span className="text-sm">{[75, 30, 60][index % 3]} %</span>
                </div>
                <div className="flex justify-end">
                  <Switch initial={index % 3 !== 0} />
                </div>
              </div>
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
  return <></>;
};

export default Client;
