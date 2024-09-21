"use client";
import React from "react";
import { RadialBar, RadialBarChart, PolarRadiusAxis, Label } from "recharts";

const riskScore = 65; // Example risk score
const color = riskScore > 75 ? "#22c55e" : riskScore >= 50 ? "#f97316" : "#ef4444"; // Green if > 75, Orange if >= 50, Red if < 50

export function ORS() {
 
  const endAngle = 180 - 1.8 * riskScore; 

  const chartData = [{ name: "Risk Score", score: riskScore }];

  return (
    <div className="flex items-center justify-center w-full h-full -mb-28"> 
      <RadialBarChart
        startAngle={180} 
        endAngle={endAngle} 
        innerRadius="80%" 
        outerRadius="100%" 
        barSize={50} 
        data={chartData}
        width={300}
        height={300} 
        className="w-full h-full" 
      >
        <PolarRadiusAxis
          type="number"
          domain={[0, 100]}
          tick={false} 
          axisLine={false} 
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {riskScore}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground text-sm"
                    >
                      Overall Score
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="score" 
          cornerRadius={10} 
          fill={color} 
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </div>
  );
}

export default ORS;
