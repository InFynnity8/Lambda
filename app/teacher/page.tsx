"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import CountUp from "react-countup";
import AreaChart from "@/components/charts/area-chart";
import StudentTable from "@/components/tables/student-table"

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
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 items-center">
      <div className="grid grid-cols-2 xl:grid-cols-4 w-full rounded-xl gap-4 max-w-[850px]">
        {stats.map((stat) => (
          <Card className="h-[90px]" key={stat.title}>
            <CardContent className="flex flex-col h-[100%] items-center justify-center">
              <CardDescription className="flex flex-col items-center justify-center">
                <h1 className="text-[]">{stat.title}</h1>
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
        <StudentTable/>
        <AreaChart />
      </div>
    </div>
  );
}
