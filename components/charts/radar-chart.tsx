"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getYear } from "date-fns"
const chartData = [
  { month: "Speed", desktop: 186 },
  { month: "Chemistry", desktop: 305 },
  { month: "Biology", desktop: 237 },
  { month: "Content", desktop: 273 },
  { month: "Physics", desktop: 209 },
  { month: "Mathematics", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Team Attributes</CardTitle>
        <CardDescription>
          Showing skill strength of the team
        </CardDescription>
      </CardHeader>
      <CardContent >
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px]"
        >
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
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
           NSMQ {getYear(Date())}
        </div>
      </CardFooter>
    </Card>
  )
}
