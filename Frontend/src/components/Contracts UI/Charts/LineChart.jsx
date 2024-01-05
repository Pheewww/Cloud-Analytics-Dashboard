import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Active Contracts",
        data: [30, 45, 50, 55, 30, 70, 65, 80, 75], // Sample data for active contracts
      },
      {
        name: "Contracts Renewal Rate",
        data: [60, 70, 65, 80, 75, 85, 80, 90, 95], // Sample data for renewal rate
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      colors: ["#008FFB", "#00E396"], // Assigning different colors to each line
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 6,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Contracts Metrics per Month",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
