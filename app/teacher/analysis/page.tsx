"use client";
import React, { useEffect, useState } from "react";
import RadialChart from "@/components/charts/radial-chart";
import PieChartComp from "@/components/charts/pie-chart";
import BarChartComp from "@/components/charts/bar-chart";
import RadarChartComp from "@/components/charts/radar-chart";
import LineChartComp from "@/components/charts/line-chart";
import LineChartSimp from "@/components/charts/line-chart-simple";
import { ChartConfig } from "@/components/ui/chart";
import { SubjectScores, RoundScores } from "@/types/records";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChartMultiple from "@/components/charts/bar-chart-multiple";
import { StudentPerformanceData } from "@/types/records";
import BarChartSingle from "@/components/charts/bar-chart-single";

const scoreChartKey = [
  "roundone",
  "roundtwo",
  "roundthree",
  "roundfour",
  "roundfive",
];

const subjectChartKey = ["biology", "chemistry", "physics", "mathematics"];

const scoreChartConfig = {
  views: {
    label: "Strength",
  },
  roundone: {
    label: "Round 1",
    color: "hsl(var(--chart-1))",
  },
  roundtwo: {
    label: "Round 2",
    color: "hsl(var(--chart-2))",
  },
  roundthree: {
    label: "Round 3",
    color: "hsl(var(--chart-3))",
  },
  roundfour: {
    label: "Round 4",
    color: "hsl(var(--chart-4))",
  },
  roundfive: {
    label: "Round 5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const subjectChartConfig = {
  views: {
    label: "Strength",
  },
  biology: {
    label: "Biology",
    color: "hsl(var(--chart-1))",
  },
  chemistry: {
    label: "Chemistry",
    color: "hsl(var(--chart-2))",
  },
  physics: {
    label: "Physics",
    color: "hsl(var(--chart-3))",
  },
  mathematics: {
    label: "Mathematics",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const Analysis = () => {
  const [scores, setScores] = useState<RoundScores[]>([]);
  const [subjects, setSubjects] = useState<SubjectScores[]>([]);
  const [speedContent, setSpeedContent] = useState<StudentPerformanceData[]>(
    []
  );

  const scoreTotals = {
    roundone: scores.reduce((acc, curr) => acc + curr.roundone, 0),
    roundtwo: scores.reduce((acc, curr) => acc + curr.roundtwo, 0),
    roundthree: scores.reduce((acc, curr) => acc + curr.roundthree, 0),
    roundfour: scores.reduce((acc, curr) => acc + curr.roundfour, 0),
    roundfive: scores.reduce((acc, curr) => acc + curr.roundfive, 0),
  };

  const subjectTotals = {
    biology: subjects.reduce((acc, curr) => acc + curr.biology, 0),
    chemistry: subjects.reduce((acc, curr) => acc + curr.chemistry, 0),
    physics: subjects.reduce((acc, curr) => acc + curr.physics, 0),
    mathematics: subjects.reduce((acc, curr) => acc + curr.mathematics, 0),
  };

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((records) => {
        setScores(records.scores);
        setSubjects(records.subjects);
        setSpeedContent(records.speedContent);
      });
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <Tabs
        defaultValue="circle"
        className="w-full box-border flex flex-col items-center gap-2 p-4"
      >
        <TabsList>
          <TabsTrigger value="circle">Circles</TabsTrigger>
          <TabsTrigger value="bar">Bars</TabsTrigger>
          <TabsTrigger value="line">Lines</TabsTrigger>
        </TabsList>
        <TabsContent value="circle" className="w-full">
          <div className="flex w-full items-center flex-col">
            <div className="grid grid-cols-2 gap-4 w-full rounded-xl max-w-[850px]">
              <RadialChart />
              <PieChartComp />
              <RadarChartComp />
              <LineChartSimp />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="bar" className="w-full">
          <div className="flex w-full items-center flex-col gap-4">
            <div className="w-full rounded-xl grid gap-4 max-w-[850px]">
              <BarChartComp
                title="Round strength"
                description="Showing the strengths of students with respect to rounds"
                chartConfig={scoreChartConfig}
                chartData={scores}
                chartKey={scoreChartKey}
                totals={scoreTotals}
              />
              <BarChartComp
                title="Subject strength"
                description="Showing the strengths of students based on subjects"
                chartConfig={subjectChartConfig}
                chartData={subjects}
                chartKey={subjectChartKey}
                totals={subjectTotals}
              />
            </div>
            <div className="w-full rounded-xl grid grid-cols-2 gap-4 max-w-[850px]">
              <BarChartMultiple chartData={speedContent} />
              <BarChartSingle />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="line" className="w-full">
          <div className="flex w-full items-center flex-col">
            <div className="w-full rounded-xl grid gap-4 max-w-[850px]">
              <LineChartComp />
              <LineChartComp />
              <LineChartComp />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analysis;
