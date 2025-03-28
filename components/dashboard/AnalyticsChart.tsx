"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from "@/data/analytics";
import { AnalyticsType } from "@/types/analyticType";

export default function AnalyticsChart() {
  return (
    <>
      <div className="mt-6">
        <Card className="rounded">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Anaylitics for this year
            </CardTitle>
            <CardDescription>Views Per Month</CardDescription>
          </CardHeader>

          <CardContent>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <LineChart width={1100} height={250} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />

                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
