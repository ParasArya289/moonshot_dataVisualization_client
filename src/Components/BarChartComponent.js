import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export const BarChartComponent = ({ data, setCategory }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          style={{ cursor: "Pointer" }}
          dataKey="a"
          fill="#8a2be2"
          onClick={() => setCategory("a")}
        />
        <Bar
          style={{ cursor: "pointer" }}
          dataKey="b"
          fill="#20b2aa"
          onClick={() => setCategory("b")}
        />
        <Bar
          style={{ cursor: "pointer" }}
          dataKey="c"
          fill="#ff4500"
          onClick={() => setCategory("c")}
        />
        <Bar
          style={{ cursor: "pointer" }}
          dataKey="d"
          fill="#1e90ff"
          onClick={() => setCategory("d")}
        />
        <Bar
          style={{ cursor: "pointer" }}
          dataKey="e"
          fill="#82ca9de"
          onClick={() => setCategory("e")}
        />
        <Bar
          style={{ cursor: "pointer" }}
          dataKey="f"
          fill="#98fb98"
          onClick={() => setCategory("f")}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
