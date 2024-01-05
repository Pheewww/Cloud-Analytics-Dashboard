import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ContractDashboard from "./components/Contracts UI/ContractDashboard";
import Fetch from "./components/UserLogs/Fetch";
import "./App.css";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ flexGrow: 1, backgroundColor: "white", color: "#242E34" }}
    >
      <Toolbar>
        <img
          src="https://assets-global.website-files.com/654cc1953659fbce12c35b03/6569aeea89e524678da19e76_Logo%20nav%20bar.svg"
          alt="Logo"
        />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            color: "#242E34",
            fonteWeight: "bold",
          }}
        >
          CLOUD ANALYTICS UI
        </Typography>
        <Button
          sx={{ color: "#242E34" }}
          variant="outlined"
          component={Link}
          to="/"
        >
          User Data
        </Button>
        <Button
          sx={{ color: "#242E34" }}
          variant="outlined"
          component={Link}
          to="/user-logs"
        >
          User Logs
        </Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContractDashboard />} />
        <Route path="/user-logs" element={<Fetch />} />
      </Routes>
    </Router>
  );
}

export default App;
