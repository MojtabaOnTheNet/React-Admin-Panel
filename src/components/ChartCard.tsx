"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

interface ChartCard1Props {
  title?: string
  description?: string
  className?: string
}

const chartData = [
  { month: "فروردین", value: 0 },
  { month: "اردیبهشت", value: 20 },
  { month: "خرداد", value: 20 },
  { month: "تیر", value: 60 },
  { month: "مرداد", value: 60 },
  { month: "شهریور", value: 120 },
  { month: "مهر", value: 180 },
  { month: "آبان", value: 120 },
  { month: "آذر", value: 130 },
  { month: "دی", value: 102 },
  { month: "بهمن", value: 110 },
  { month: "اسفند", value: 170 },
]

const chartConfig = {
  value: {
    label: "درآمد",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const ChartCard = ({
  title = "نمودار درآمد ",
  description = "درآمد هر ماه برای امسال(میلیون تومان)",
  className,
}: ChartCard1Props) => {
  return (
    <Card className={cn("w-full max-w-200", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-108 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              fontSize={12}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ stroke: "var(--border)", strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { ChartCard }
