import React from "react";
import { StudentBio } from "@/types/bio";
import { RadarChart, PolarAngleAxis, PolarGrid, Radar } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  { month: "Speed", desktop: 186 },
  { month: "Mathematics", desktop: 305 },
  { month: "Biology", desktop: 237 },
  { month: "Content", desktop: 273 },
  { month: "Chemistry", desktop: 209 },
  { month: "Physics", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const StudentBioData = ({ data }: { data: StudentBio }) => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="mx-auto max-h-[200px]">
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ChartContainer>
      <div className="flex items-center w-full justify-center">
        <ul className="text-right">
          <li>Year</li>
          <li>Gender</li>
          <li>Overall Performance</li>
          <li>Remarks</li>
          <li>Personal Contact</li>
          <li>Date Of Birth</li>
          <li>Nationality</li>
          <li>Residence</li>
          <li>Parent&apos;s Name</li>
          <li>Parent&apos;s Contact</li>
          <li>Parent&apos;s Profession</li>
        </ul>
        <ul className="text-muted-foreground">
          <li>{": "}{data.year}</li>
          <li>{": "}{data.gender}</li>
          <li>{": "}{data.performance}</li>
          <li>{": "}{data.remarks}</li>
          <li>{": "}{data.contact}</li>
          <li>{": "}{data.dateOfBirth?.toDateString()}</li>
          <li>{": "}{data.nationality}</li>
          <li>{": "}{data.residence}</li>
          <li>{": "}{data.parent?.name}</li>
          <li>{": "}{data.parent?.contact}</li>
          <li>{": "}{data.parent?.profession}</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentBioData;
