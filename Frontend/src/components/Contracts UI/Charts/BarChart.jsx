import  { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  // Sample data for "Average Contract Value (ACV)" per month
  const [chartData] = useState({
    series: [
      {
        name: "(ACV)",
        data: [120, 150, 140, 160, 180, 170, 190, 200, 220], 
      },
    ],
    options: {
      chart: {
        type: "bar",

        height: 350,
      },
      colors: ["#5dc5e3"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
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
      yaxis: {
        title: {
          text: "Average Contract Value (ACV)",
        },
        align: "center",
      },
      fill: {
        opacity: 1,
      },
      //    animations: {
      //     enabled: true,
      //     easing: 'linear',
      //     speed: 800,
      //     animateGradually: {
      //         enabled: true,
      //         delay: 150
      //     },
      //     dynamicAnimation: {
      //         enabled: true,
      //         speed: 350
      //     }
      // },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val;
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
