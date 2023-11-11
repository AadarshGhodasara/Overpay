import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ labels = [], datasets, title, metaData }) {
  const {
    isCurrency = false,
    allowDecimals = true,
    width = 1440,
    height = 414,
    yAxisLable = "No Of Users",
    xAxisLabel = "Time",
    maintainAspectRatio = true,
    isFromExportReport = false,
    displayLegend = true,
    tooltipIntersect = true,
    tooltipMode = "nearest",
    xAxisGrid = true,
    yAxisGrid = true,
    xAxisMaxRotation = 45,
    xAxisMinRotation = 0,
    externalTooltip = false,
  } = metaData ?? {};

  const data = {
    labels,
    datasets,
  };

  let options = {
    responsive: true,
    maintainAspectRatio: maintainAspectRatio,
    plugins: {
      legend: {
        position: "bottom",
        display: displayLegend,
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        mode: tooltipMode,
        intersect: tooltipIntersect,
        bodySpacing: 5,
        padding: 10,
        enabled: !externalTooltip,
        callbacks: {
          title: (context) => {
            return context?.[0]?.label;
          },
          label: function (context) {
            let label = context?.dataset?.label || "";
            if (label) {
              label += ": ";
            }
            label += isCurrency
              ? `$${context?.formattedValue}`
              : (context?.parsed?.y, allowDecimals ? 2 : 0);
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        title: {
          display: true,
          text: yAxisLable,
        },
        allowDecimals: false,
        ticks: {
          beginAtZero: true,
          callback: function (label, index, labels) {
            return label;
          },
        },
        grid: {
          display: yAxisGrid,
        },
      },
      x: {
        title: {
          display: true,
          text: xAxisLabel,
        },
        grid: {
          display: xAxisGrid,
        },
        ticks: {
          autoSkip: false, // Prevent automatic skipping of labels
          maxRotation: xAxisMaxRotation, // Rotate x-axis labels if needed (0 for no rotation)
          minRotation: xAxisMinRotation,
        },
      },
    },
  };

  if (isFromExportReport) {
    options = { ...options, devicePixelRatio: 5 };
  }

  const YAxisGridOnHoverPlugin = externalTooltip
    ? {
        afterDatasetsDraw: (chart) => {
          const { ctx } = chart;
          if (chart?.tooltip?.getActiveElements()?.length) {
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 7]);
            ctx.moveTo(chart?.tooltip?.caretX, chart?.chartArea?.top);
            ctx.lineTo(chart?.tooltip?.caretX, chart?.chartArea?.bottom);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#74798c";
            ctx.stroke();
            ctx.restore();
          }
        },
      }
    : {};

  return (
    <Line
      options={options}
      data={data}
      width={width}
      height={height}
      plugins={[YAxisGridOnHoverPlugin]}
    />
  );
}

export default LineChart;
