"use client";
import data from "@/assets/data/lineData.json";
import { type EChartsOption } from "echarts-for-react";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react/lib/core";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);

export default function LineChartForCompetitorAnalysis() {
  const option: EChartsOption = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Ettarra", "Govinda's Bistro",],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      data: data.date,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Ettarra",
        type: "line",
        stack: "Total",
        data: data.comp1,
      },
      {
        name: "Govinda's Bistro",
        type: "line",
        stack: "Total",
        data: data.comp2,
      },
    ],
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      style={{ height: "550px", width: "100%", padding: "10px", border: "5px" }}
      option={option}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: "canvas" }}
    />
  );
}
