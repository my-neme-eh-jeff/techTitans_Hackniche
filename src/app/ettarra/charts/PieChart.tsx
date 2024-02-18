import data from "@/assets/data/pieData.json";
import { type EChartsOption } from "echarts-for-react";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
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
  PieChart,
  CanvasRenderer,
]);
export default function PieChartPlot() {
  const option: EChartsOption = {
    backgroundColor: "#2c343c",
    title: {
      text: "Customized Pie",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Menu analysis",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: data,
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.8)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 6)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          backgroundColor: "#c23531",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      style={{ height: "800px", width: "100%", padding: "10px", border: "5px" }}
      option={option}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: "canvas" }}
    />
  );
}
