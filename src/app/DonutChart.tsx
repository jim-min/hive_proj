"use client";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function DonutChart({ value }: { value: number }) {
  const data = [
    { name: "채워진", value },
    { name: "비어있음", value: 100 - value },
  ];
  const COLORS = ["#e97ad9", "#f3f3f3"];

  return (
    <div className="w-20 h-20 md:w-[120px] md:h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"100%"}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-bold text-lg md:text-2xl text-[#171717]">{value}%</span>
      </div>
    </div>
  );
}
