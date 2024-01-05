import { useState } from "react";
import axios from "axios";
import BillingFilterInputs from "./BillingFilterInputs.jsx"; 
import BillingDisplay from "./table.jsx"; 
import BillingEntryForm from "./BillingEntryForm.jsx"; 

export default function FetchBillingData() {
  const [billingData, setBillingData] = useState([]);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    customerId: "",
    accountName: "",
    serviceName: "",
    subscriptionPlan: "",
    resourceId: "",
    usageQuantity: "",
    unitPrice: "",
    timestamp: "",
  });

  const handleInputChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const handleBillingSubmit = (newBillingEntry) => {
    setBillingData([...billingData, newBillingEntry]); 
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/search", {
        params: filters,
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      console.log(response.data);
      setBillingData(response.data);
      setError("");
    } catch (error) {
      setError("Failed to fetch billing data. Please try again.");
      console.error("Error fetching billing data:", error);
    }
  };

  return (
    <div className="App">
      <h2>Cloud Billing Log Ingestor Interface</h2>
      <div style={{ display: "flex" }}>
        <BillingEntryForm onBillingSubmit={handleBillingSubmit} />
      </div>

      <h2>Cloud Billing Query Interface</h2>

      <div>
        {error && <div className="error-message">{error}</div>}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {" "}
          <BillingFilterInputs
            onSearch={handleSearch}
            onInputChange={handleInputChange}
          />
        </div>

        <BillingDisplay billingData={billingData} />
      </div>
    </div>
  );
}
