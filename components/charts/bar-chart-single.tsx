"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
  { month: "Alice", desktop: 186, mobile: 80 },
  { month: "Bob", desktop: 305, mobile: 200 },
  { month: "Charlie", desktop: 237, mobile: 120 },
  { month: "Diana", desktop: 73, mobile: 190 },
  { month: "Eve", desktop: 209, mobile: 130 },
  { month: "Frank", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Score",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-3))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top six</CardTitle>
        <CardDescription>NSMQ {getYear(Date())}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing the overall performance of the best six students in the team
        </div>
      </CardFooter>
    </Card>
  )
}
