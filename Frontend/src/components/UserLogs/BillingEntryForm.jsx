// // LogEntryForm.jsx
// import { useState } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { TextField, Button, Grid, Container } from "@mui/material";



// const LogEntryForm = ({ onLogSubmit }) => {
//   const [logEntry, setLogEntry] = useState({
//     level: "",
//     message: "",
//     resourceId: "",
//     timestamp: "",
//     traceId: "",
//     spanId: "",
//     commit: "",
//     parentResourceId: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLogEntry({ ...logEntry, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//      const isAnyFieldEmpty = Object.values(logEntry).some(
//        (value) => value.trim() === ""
//      );
//      if (isAnyFieldEmpty) {
//        alert("Please fill in all fields.");
//        return;
//      }

//     try {
//       await axios.post("http://127.0.0.1:3000/ingest", [logEntry]);
//       onLogSubmit(logEntry);
//       setLogEntry({
//         level: "",
//         message: "",
//         resourceId: "",
//         timestamp: "",
//         traceId: "",
//         spanId: "",
//         commit: "",
//         parentResourceId: "",
//       });
//     } catch (error) {
//       console.error("Error ingesting log entry:", error);
//     }
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <Grid
//           container
//           spacing={2}
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Level"
//               name="level"
//               value={logEntry.level}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Message"
//               name="message"
//               value={logEntry.message}
//               onChange={handleInputChange}
//             />
//           </Grid>
         
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Resource ID"
//               name="resourceId"
//               value={logEntry.resourceId}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               type="datetime-local"
//               label="Timestamp"
//               name="timestamp"
//               value={logEntry.timestamp}
//               onChange={handleInputChange}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Trace ID"
//               name="traceId"
//               value={logEntry.traceId}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Span ID"
//               name="spanId"
//               value={logEntry.spanId}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Commit"
//               name="commit"
//               value={logEntry.commit}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Parent Resource ID"
//               name="parentResourceId"
//               value={logEntry.parentResourceId}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" color="primary" type="submit" fullWidth>
//               Submit Log Entry
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };





// LogEntryForm.propTypes = {
//     onLogSubmit: PropTypes.func.isRequired,

// }


// export default LogEntryForm;


import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { TextField, Button, Grid, Container } from "@mui/material";

const BillingEntryForm = ({ onBillingSubmit }) => {
  const [billingEntry, setBillingEntry] = useState({
    customerId: "",
    message: "",
    accountName: "",
    serviceName: "",
    subscriptionPlan: "",
    resourceId: "",
    usageQuantity: "",
    unitPrice: "",
    timestamp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingEntry({ ...billingEntry, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(billingEntry).some(
      (value) => value.trim() === ""
    );
    if (isAnyFieldEmpty) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:3000/ingest-billing", [billingEntry]);
      onBillingSubmit(billingEntry);
      setBillingEntry({
        customerId: "",
        message: "",
        accountName: "",
        serviceName: "",
        subscriptionPlan: "",
        resourceId: "",
        usageQuantity: "",
        unitPrice: "",
        timestamp: "",
      });
    } catch (error) {
      console.error("Error ingesting billing entry:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
        
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Customer ID"
              name="customerId"
              value={billingEntry.customerId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
           <TextField
              fullWidth
              label="Message"
              name="message"
              value={billingEntry.message}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Account Name"
              name="accountName"
              value={billingEntry.accountName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Service Name"
              name="serviceName"
              value={billingEntry.serviceName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Subscription Plan"
              name="subscriptionPlan"
              value={billingEntry.subscriptionPlan}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Resource ID"
              name="resourceId"
              value={billingEntry.resourceId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Usage Quantity"
              name="usageQuantity"
              value={billingEntry.usageQuantity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Unit Price"
              name="unitPrice"
              value={billingEntry.unitPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Timestamp"
              name="timestamp"
              value={billingEntry.timestamp}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit Billing Entry
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

BillingEntryForm.propTypes = {
  onBillingSubmit: PropTypes.func.isRequired,
};

export default BillingEntryForm;
