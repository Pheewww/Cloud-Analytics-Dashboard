import { Box } from "@mui/material";
import LineChart from "./Charts/LineChart.jsx";
import BarChart from "./Charts/BarChart.jsx";
import ContractConversionFunnel from "./Charts/FunnelChart.jsx";
import ContractPieChart from "./Charts/PieChart.jsx";
import MapChart from "./Charts/MapChart.jsx";
import Heat_Calendar from "./Charts/Heatmap.jsx";

function ContractDashboard() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column", // Changed to column for vertical stacking
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row", // Row direction to place charts side by side
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 3,
          }}
        >
          <Box sx={{ width: "50%", height: "100%" }}>
            <BarChart />
          </Box>

          <Box sx={{ width: "50%", height: "100%" }}>
            <LineChart />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row", // Row direction to place charts side by side
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 3,
          }}
        >
          <Box sx={{ width: "50%", height: "300px" }}>
            <ContractConversionFunnel />
          </Box>

          <Box sx={{ width: "50%", height: "100%", justifyContent: "center" }}>
            <ContractPieChart />
          </Box>
          
        </Box>
        <Box sx={{ width: "100%", height: "100%", boxShadow: 10 }}>
          <Heat_Calendar />
        </Box>
        <Box sx={{ width: "100%", height: "100%", boxShadow: 3 }}>
          <MapChart />
        </Box>
      </Box>
    </>
  );
}

export default ContractDashboard;
