import "./App.css";
import React from "react";
import { BarChartComponent } from "./Components/BarChartComponent";
import { LineChartComponent } from "./Components/LineChartComponent";

export default function App() {
  return (
    <div>
      <BarChartComponent />
      <LineChartComponent />
    </div>
  );
}
