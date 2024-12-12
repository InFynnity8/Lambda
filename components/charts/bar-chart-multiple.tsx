"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

  

const chartConfig = {
  speed: {
    label: "Speed",
    color: "hsl(var(--chart-1))",
  },
  content: {
    label: "Content",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Component({chartData} : {chartData: object[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Speed | Content</CardTitle>
        <CardDescription>NSMQ {getYear(Date())}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="speed" fill="var(--color-speed)" radius={4} />
            <Bar dataKey="content" fill="var(--color-content)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing speed and content of students in a scale of 100
        </div>
      </CardFooter>
    </Card>
  )
}
