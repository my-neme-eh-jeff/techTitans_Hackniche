"use client";
import { type EChartsOption } from "echarts-for-react";
import data from "@/assets/data/association_rules_data.json";
import * as echarts from "echarts/core";
import { GraphChart, type GraphSeriesOption } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react/lib/core";
import {
  GridComponent,
  //   PolarComponent,
  //   RadarComponent,
  //   GeoComponent,
  //   SingleAxisComponent,
  //   ParallelComponent,
  //   CalendarComponent,
  //   GraphicComponent,
  //   ToolboxComponent,
  TooltipComponent,
  //   AxisPointerComponent,
  //   BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from "echarts/components";
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";
import jsonData from "@/assets/data/association_rules_data.json";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  GraphChart,
  CanvasRenderer,
]);

export default function GraphChartMB() {
  const option: EChartsOption = {
    backgroundColor: "#2c343c",
    title: {
      text: "NPM Dependencies",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        layout: "none",
        progressiveThreshold: 700,
        data: jsonData.nodes.map(function (node) {
          console.log(node);
          return {
            x: node.x,
            y: node.y,
            id: node.id,
            name: node.label,
            symbolSize: node.size,
            itemStyle: {
              color: node.color,
            },
          };
        }),
        edges: jsonData.edges.map(function (edge) {
          return {
            source: edge.sourceID,
            target: edge.targetID,
          };
        }),
        emphasis: {
          focus: "adjacency",
          label: {
            position: "right",
            show: true,
          },
        },
        roam: true,
        lineStyle: {
          width: 0.5,
          curveness: 0.3,
          opacity: 0.7,
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
      theme={"dark"}
      opts={{ renderer: "canvas" }}
    />
  );
}
