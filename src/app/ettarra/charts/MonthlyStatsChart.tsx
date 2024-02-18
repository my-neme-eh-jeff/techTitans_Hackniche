import { type EChartsOption } from "echarts-for-react";
import data from "@/assets/data/monthlySalesData.json";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react/lib/core";
import {
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
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

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

export default function DailyStatsChart() {
  var x: string[] = [],
    y: number[] = [];
  data.map((data) => {
    x.push(data.Date);
    y.push(data.Sales);
  });
  const option: EChartsOption = {
    backgroundColor: "#2c343c",
    title: {
      text: "Daily sales data",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      bottom: 90,
    },
    dataZoom: [
      {
        type: "inside",
      },
      {
        type: "slider",
      },
    ],
    xAxis: {
      data: x,
      silent: false,
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    yAxis: {
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        type: "bar",
        data: y,
        large: true,
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
