import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Overview = () => {
  const data = [
    {
      name: "January",
      revenue: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "February",
      revenue: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "March",
      revenue: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      name: "April",
      revenue: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      name: "May",
      revenue: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      name: "June",
      revenue: 2390,
      sales: 3800,
      amt: 2500,
    },
    {
      name: "July",
      revenue: 3490,
      sales: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: "January",
      income: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "March",
      income: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "May",
      income: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "July",
      income: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "September",
      income: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "November",
      income: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "January ",
      income: 4100,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="md:container mx-auto p-5 mt-10">
      <h1 className="text-3xl font-bold mb-3">Overview</h1>
      <div className="h-2 bg-gray-500 w-full mb-10">
        <div className="h-2 bg-success w-1/5 "></div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <AreaChart
            width={600}
            height={270}
            data={data2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Overview;
