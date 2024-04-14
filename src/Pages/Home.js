import "./Home.css";
import React, { useEffect, useState } from "react";
import { BarChartComponent } from ".././Components/BarChartComponent";
import { LineChartComponent } from ".././Components/LineChartComponent";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import { filter } from ".././Utility";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    startDate: new Date("2022-10-12"),
    endDate: new Date("2022-10-21"),
    age: "15-25",
    gender: "Male",
  });
  const [category, setCategory] = useState("a");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://moonshot-datavisulalization-server-1.onrender.com/data"
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const dateRange = {
      startDate: new Date(searchParams.get("startDate")) || JSON.parse(localStorage.getItem("filters")).startDate,
      endDate: new Date(searchParams.get("endDate")) || JSON.parse(localStorage.getItem("filters")).endDate,
    };
    const ageParams = searchParams.get("age") || JSON.parse(localStorage.getItem("filters")).age;
    const genderParams = searchParams.get("gender") || JSON.parse(localStorage.getItem("filters")).gender;


    localStorage.setItem("filters", JSON.stringify({
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      age: ageParams,
      gender: genderParams,
    }))

    setFilteredData(() => filter(data, dateRange, ageParams, genderParams));
  }, [data, searchParams]);
  
  return (
    <div className="home">
      <Navbar />
      <div className="filters">
        <DateRangePicker
          ranges={[
            {
              startDate: new Date(searchParams.get("startDate")),
              endDate: new Date(searchParams.get("endDate")),
            },
          ]}
          onChange={(ranges) => {
            setSearchParams(
              (prev) => {
                prev.set("startDate", ranges.range1.startDate);
                prev.set("endDate", ranges.range1.endDate);
                return prev;
              },
              { replace: true }
            );
          }}
        />
        <div>
          <label>
            Age:
            <select
              value={searchParams.get("age")}
              onChange={(e) => {
                setSearchParams((prev) => {
                  prev.set("age", e.target.value);
                  return prev;
                });
              }}
            >
              <option value="15-25">15-25</option>
              <option value=">25">{">25"}</option>
            </select>
          </label>
          <label>
            Gender:
            <select
              value={searchParams.get("gender")}
              onChange={(e) => {
                setSearchParams((prev) => {
                  prev.set("gender", e.target.value);
                  return prev;
                });
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
      </div>
      <div className="graphs">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <>
            <BarChartComponent data={filteredData} setCategory={setCategory} />
            <LineChartComponent data={filteredData} category={category} />
          </>
        )}
      </div>
    </div>
  );
}
