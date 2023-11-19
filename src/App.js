import "./App.css";
import React, { useEffect, useState } from "react";
import { BarChartComponent } from "./Components/BarChartComponent";
import { LineChartComponent } from "./Components/LineChartComponent";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import { filter } from "./Utility";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [date, setDate] = useState({
    startDate: new Date("2022-10-12"),
    endDate: new Date("2022-10-21"),
  });
  const [age, setAge] = useState("15-25");
  const [gender, setGender] = useState("Male");
  const [category, setCategory] = useState("a");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://moonshotdatavisulalizationserver.parasarya2.repl.co/data"
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredData(() => filter(data, date, age, gender));
  }, [date, data, age, gender]);
  return (
    <div className="App">
      <h1>Data Visualizer</h1>
      <div className="filters">
        <DateRangePicker
          ranges={[date]}
          onChange={(ranges) => setDate(ranges.range1)}
        />
        <label>
          Age:
          <select onChange={(e) => setAge(e.target.value)}>
            <option value="15-25">15-25</option>
            <option value=">25">{">25"}</option>
          </select>
        </label>
        <label>
          Gender:
          <select onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </div>
      <div className="graphs">
        <BarChartComponent data={filteredData} setCategory={setCategory} />
        <LineChartComponent data={filteredData} category={category} />
      </div>
    </div>
  );
}
