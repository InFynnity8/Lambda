"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getYear } from "date-fns"
const statData = [
  { group: "mstudents", total: 6, fill: "var(--color-mstudents)" },
  { group: "fstudents", total: 4, fill: "var(--color-fstudents)" },
  { group: "mteachers", total: 8, fill: "var(--color-mteachers)" },
  { group: "fteachers", total: 3, fill: "var(--color-fteachers)" },
  { group: "others", total: 5, fill: "var(--color-others)" },
]

const chartConfig = {
  visitors: {
    label: "Total",
  },
  total: {
    label: "Total",
  },
  mstudents: {
    label: "Male students",
    color: "hsl(var(--chart-1))",
  },
  fstudents: {
    label: "Female students",
    color: "hsl(var(--chart-2))",
  },
  mteachers: {
    label: "Male teachers",
    color: "hsl(var(--chart-3))",
  },
  fteachers: {
    label: "Female teachers",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function Component() {
  const id = "pie-interactive"
  const [activeGroup, setActiveGroup] = React.useState(statData[0].group)

  const activeIndex = React.useMemo(
    () => statData.findIndex((item) => item.group === activeGroup),
    [activeGroup]
  )
  const groups = React.useMemo(() => statData.map((item) => item.group), [])

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Statistics</CardTitle>
          <CardDescription>NSMQ {getYear(Date())}</CardDescription>
        </div>
        <Select value={activeGroup} onValueChange={setActiveGroup}>
          <SelectTrigger
            className="ml-auto h-7 w-[155px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select group" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {groups.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="w-[160px]" hideLabel />}
            />
            <Pie
              data={statData}
              dataKey="total"
              nameKey="group"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {statData[activeIndex].total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
