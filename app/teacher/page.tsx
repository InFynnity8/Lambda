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
      <div className="w-full h-80 relative mb-20" style={{backgroundImage: "url('champion.jpg')", backgroundSize: "cover", backgroundPosition: ""}}>
        {/* profile photo */}
        <div style={{backgroundImage: "url('OfficialPresecLogo.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className="border-2 border-secondary-background rounded-full bg-muted  size-28 md:size-32 lg:size-36 xl:size-40 absolute bottom-[-56px] md:bottom-[-64px] lg:bottom-[-72px] xl:bottom-[-80px] left-4"></div>
        <div className=""> <Button variant="outline" className="rounded-3xl absolute right-4 bottom-[-48px]">Edit profile</Button> </div>
      </div> 

      <div className="flex flex-1 flex-col gap-4 p-4 ">
        {/* <div className="h-64 w-full text-3xl">
          <h1> {greet} !</h1> 
        </div> */}
        <h1 className="text-[20px] pt-5">Statistics</h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 w-full rounded-xl gap-4 max-w-[850px]">
          {stats.map((stat) => (
            <Card className="h-[90px] bg-transparent backdrop-blur-lg" key={stat.title}>
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
          <h1 className="text-[20px] pt-5">Bio</h1>
          <StudentTable />
          <h1 className="text-[20px] pt-5">Analysis</h1>
          <div className="w-full grid-cols-2 grid gap-4">
            <RadarChartComp />
          </div>
          <AreaChart />
        </div>
      </div>
    </>
  );
}
