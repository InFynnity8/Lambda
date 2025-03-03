"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import AreaChart from "@/components/charts/area-chart";
import StudentTable from "@/components/tables/student-table";
import RadarChartComp from "@/components/charts/radar-chart";
import {
  formatDate,
  getDate,
  getDay,
  getTime,
  getUnixTime,
  getYear,
} from "date-fns";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Students",
    value: 24,
    icon: "blue",
  },
  {
    title: "Teachers",
    value: 6,
    icon: "blue",
  },
  {
    title: "Internal Trials",
    value: 41,
    icon: "blue",
  },
  {
    title: "External Trials",
    value: 17,
    icon: "blue",
  },
];

export default function Page() {
  const currentTime = formatDate(Date(), "k");
  const [greet, setGreet] = useState("");
  useEffect(() => {
    switch (currentTime) {
      case "24":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
        setGreet("Good Morning");
        break;
      case "12":
      case "13":
      case "14":
      case "15":
        setGreet("Good Afternoon");
        break;
      case "16":
      case "17":
      case "18":
      case "19":
      case "20":
      case "21":
      case "22":
      case "23":
        setGreet("Good Evening");
        break;
      default:
        break;
    }
  }, [currentTime]);

  return (
    <>
      {/* cover */}
      <div
        className="flex justify-center items-center w-full h-60 relative bg-muted"
        style={{
          backgroundImage: "url('/goodevening.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        <div className="h-10 text-5xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,1)] ">
          <h1> {greet} !</h1>
        </div>
      </div>
 
      <div className="flex flex-1 flex-col gap-4 p-4 ">
        <h1 className="text-[20px] pt-5 font-bold">Statistics</h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 w-full rounded-xl gap-4 max-w-[850px]">
          {stats.map((stat) => (
            <Card
              className="h-[90px] bg-transparent backdrop-blur-lg"
              key={stat.title}
            >
              <CardContent className="flex flex-col h-[100%] items-center justify-center">
                <CardDescription className="flex flex-col items-center justify-center">
                  <h1>{stat.title}</h1>
                </CardDescription>
                {stat.value !== 0 ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={5}
                    delay={0}
                    className="text-3xl xl:text-[45px] font-extrabold"
                    separator=","
                  />
                ) : (
                  "--"
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="w-full max-w-[850px] rounded-xl gap-4 grid">
          <h1 className="text-[20px] pt-5 font-bold">Bio</h1>
          <StudentTable />
          <h1 className="text-[20px] pt-5 font-bold">Analysis</h1>
          <div className="w-full grid-cols-2 grid gap-4">
            <RadarChartComp />
          </div>
          <AreaChart />
        </div>
      </div>
    </>
  );
}
