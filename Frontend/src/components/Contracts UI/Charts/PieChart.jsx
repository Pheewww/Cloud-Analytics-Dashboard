import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContractPieChart = () => {
  const data = {
    labels: [
      "Gold Plan",
      "Silver Plan",
      "Bronze Plan",
      "Custom Plan",
      "Basic Plan",
    ],
    datasets: [
      {
        label: "Contract Types",
        data: [500, 300, 200, 100, 400], // Sample values for each plan
        backgroundColor: [
          "#FFD700", // Gold color
          "#C0C0C0", // Silver color
          "#CD7F32", // Bronze color
          "#00BFFF", // Custom plan color (sky blue)
          "#90EE90", // Basic plan color (light green)
        ],
        borderColor: ["#FFD700", "#C0C0C0", "#CD7F32", "#00BFFF", "#90EE90"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Contract Distribution by Type",
      },
    },
  };

  return (
    <div
      className="plot"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "375px",
        marginTop: "60px",
        marginBottom: "30px",
      }}
    >
      {/* <h1>Contract Distribution by Type</h1> */}
      <div style={{ marginTop: "30px" }}>
        <Typography variant="h6" fontWeight="bold">
          Different Subscription Plan Active
        </Typography>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ContractPieChart;
