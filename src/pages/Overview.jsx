import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  width: 500,
  height: 300,
};

const dataset = [
  {
    month: "Jan",
    seoul: 49.9,
  },
  {
    month: "Feb",
    seoul: 71.5,
  },
  {
    month: "Mar",
    seoul: 106.4,
  },
  {
    month: "Apr",
    seoul: 80.2,
  },
  {
    month: "May",
    seoul: 100.0,
  },
  {
    month: "Jun",
    seoul: 166.0,
  },
];

const valueFormatter = (value) => `${value} mm`;

const Overview = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="https://images.ctfassets.net/aj53l2bs72uc/3qtVT2BlPh9xS43BZEeNuc/483fa1f463ad5d9a5dac174139d50ddf/Infogragphic_Example-11-2048x1255.webp"
          alt=""
          className="h-45 w-full object-cover"
        />
      </div>
      <div className="flex p-5 justify-between mt-10">
        {/* Progress */}
      <div className="flex items-center">
          <ul className="steps w-xl">
            <li className="step step-primary">Week1</li>
            <li className="step step-primary">Week2</li>
            <li className="step">Week3</li>
            <li className="step">Week4</li>
          </ul>
        </div>
        {/* Graph */}
        <div className="border-amber-300 border-2 rounded-2xl shadow-xl">
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "seoul", label: "Monthly Result", valueFormatter },
            ]}
            layout="horizontal"
            {...chartSetting}
          />
        </div>

      </div>
      
      
    </>
  );
};

export default Overview;
