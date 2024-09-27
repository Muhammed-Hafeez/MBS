import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
function Charts({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={500}
      className={"line-chart-container"}
    >
      <LineChart data={data}>
        <Line type="monotone" dataKey="users" stroke="#bd8100" />
        <Line type="monotone" dataKey="leads" stroke="#11f2dc" />
        <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
        <XAxis dataKey="month" xAxisId={0} />
        <YAxis yAxisId={0} />
        <Tooltip contentStyle={{ backgroundColor: "#000000" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Charts;
