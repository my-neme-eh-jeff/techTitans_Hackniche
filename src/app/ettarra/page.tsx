"use client";
import CarouselDemo from "./CarouselDemo";
import BarToScatterChart from "./charts/BarToScatterChart";
import DrillChartIframe from "./charts/DrillChartIframe";
import DrillDownChart from "./charts/DrillDownChart";
import GraphChartMB from "./charts/GraphChart";
import DailyStatsChart from "./charts/MonthlyStatsChart";
import PieChartPlot from "./charts/PieChart";
import ImageGeneration from "./imageGeneration";

export default function EttarraPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center mb-14">
          <CarouselDemo />
        </div>
        <div className="flex flex-col gap-10 p-16">
          {/* <GraphChartMB /> */}
          <DailyStatsChart />
          <DrillDownChart />
          <BarToScatterChart />
          <PieChartPlot />
          <DrillChartIframe />
        </div>
        <div className="flex justify-center text-center flex-col gap-y-10 mb-20">
          <h1 className="text-2xl ">Looking to spruce things up?</h1>
          <ImageGeneration />
        </div>
      </div>
    </>
  );
}
