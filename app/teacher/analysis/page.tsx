import React from "react";
import RadialChart from "@/components/charts/radial-chart";
import PieChartComp from "@/components/charts/pie-chart";
import BarChartComp from "@/components/charts/bar-chart";
import RadarChartComp from "@/components/charts/radar-chart";
import LineChartComp from "@/components/charts/line-chart";
import LineChartSimp from "@/components/charts/line-chart-simple";
import { ChartConfig } from "@/components/ui/chart";

const chartData = [
  {
    name: "Alice",
    roundone: 87,
    roundtwo: 92,
    roundthree: 78,
    roundfour: 78,
    roundfive: 85,
  },
  {
    name: "Bob",
    roundone: 75,
    roundtwo: 88,
    roundthree: 88,
    roundfour: 91,
    roundfive: 84,
  },
  {
    name: "Charlie",
    roundone: 90,
    roundtwo: 85,
    roundthree: 85,
    roundfour: 88,
    roundfive: 93,
  },
  {
    name: "Diana",
    roundone: 82,
    roundtwo: 91,
    roundthree: 91,
    roundfour: 79,
    roundfive: 87,
  },
  {
    name: "Eve",
    roundone: 94,
    roundtwo: 89,
    roundthree: 89,
    roundfour: 84,
    roundfive: 90,
  },
  {
    name: "Frank",
    roundone: 88,
    roundtwo: 78,
    roundthree: 78,
    roundfour: 85,
    roundfive: 80,
  },
  {
    name: "Grace",
    roundone: 79,
    roundtwo: 84,
    roundthree: 84,
    roundfour: 91,
    roundfive: 88,
  },
  {
    name: "Hank",
    roundone: 85,
    roundtwo: 87,
    roundthree: 87,
    roundfour: 92,
    roundfive: 81,
  },
  {
    name: "Ivy",
    roundone: 80,
    roundtwo: 83,
    roundthree: 83,
    roundfour: 88,
    roundfive: 86,
  },
  {
    name: "Jack",
    roundone: 92,
    roundtwo: 90,
    roundthree: 90,
    roundfour: 85,
    roundfive: 89,
  },
  {
    name: "Kathy",
    roundone: 84,
    roundtwo: 86,
    roundthree: 86,
    roundfour: 90,
    roundfive: 88,
  },
  {
    name: "Leo",
    roundone: 89,
    roundtwo: 92,
    roundthree: 92,
    roundfour: 87,
    roundfive: 91,
  },
];
const chartKey = [
  "roundone",
  "roundtwo",
  "roundthree",
  "roundfour",
  "roundfive",
];

const totals = {
  roundone: chartData.reduce((acc, curr) => acc + curr.roundone, 0),
  roundtwo: chartData.reduce((acc, curr) => acc + curr.roundtwo, 0),
  roundthree: chartData.reduce((acc, curr) => acc + curr.roundthree, 0),
  roundfour: chartData.reduce((acc, curr) => acc + curr.roundfour, 0),
  roundfive: chartData.reduce((acc, curr) => acc + curr.roundfive, 0),
};
const chartConfig = {
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

const Analysis = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-2 gap-4 mx-auto w-full max-w-3xl rounded-xl">
        <RadialChart />
        <PieChartComp />
        <RadarChartComp />
        <LineChartSimp />
      </div>
      <div className="mx-auto w-full max-w-3xl rounded-xl grid gap-4">
        <LineChartComp />
        <BarChartComp
          title="Contest strength"
          description="Showing the strengths of students with respect to rounds"
          chartConfig={chartConfig}
          chartData={chartData}
          chartKey={chartKey}
          totals={totals}
        />
        <BarChartComp
          title="Subject strength"
          description="Showing the strengths of students based on subjects"
          chartConfig={chartConfig}
          chartData={chartData}
          chartKey={chartKey}
          totals={totals}
        />
      </div>
    </div>
  );
};

export default Analysis;
