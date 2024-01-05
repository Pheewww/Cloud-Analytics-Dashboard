// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import PropTypes from "prop-types";

// const BillingDisplay = ({ billingData }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Customer ID</TableCell>
//             <TableCell>Message</TableCell>
//             <TableCell>Account Name</TableCell>
//             <TableCell>Service Name</TableCell>
//             <TableCell>Subscription Plan</TableCell>
//             <TableCell>Resource ID</TableCell>
//             <TableCell>Usage Quantity</TableCell>
//             <TableCell>Unit Price</TableCell>
//             <TableCell>Timestamp</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {billingData.map((entry, index) => (
//             <TableRow key={index}>
//               <TableCell>{entry.customerId}</TableCell>
//               <TableCell>{entry.message}</TableCell>
//               <TableCell>{entry.accountName}</TableCell>
//               <TableCell>{entry.serviceName}</TableCell>
//               <TableCell>{entry.subscriptionPlan}</TableCell>
//               <TableCell>{entry.resourceId}</TableCell>
//               <TableCell>{entry.usageQuantity}</TableCell>
//               <TableCell>{entry.unitPrice}</TableCell>
//               <TableCell>{entry.timestamp}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// BillingDisplay.propTypes = {
//   billingData: PropTypes.arrayOf(
//     PropTypes.shape({
//       customerId: PropTypes.string,
//       message: PropTypes.string,
//       accountName: PropTypes.string,
//       serviceName: PropTypes.string,
//       subscriptionPlan: PropTypes.string,
//       resourceId: PropTypes.string,
//       usageQuantity: PropTypes.number,
//       unitPrice: PropTypes.number,
//       timestamp: PropTypes.string,
//     })
//   ),
// };

// export default BillingDisplay;

import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Button, Paper } from "@mui/material";

const BillingDisplay = ({ billingData }) => {

    const getButtonColor = (plan) => {
      const colors = {
        Gold: "gold",
        Standard: "green",
        Basic: "#cd7f32", 
      };
      return colors[plan] || "default"; 
    };
  const columns = [
    { field: "customerId", headerName: "Customer ID", width: 150 },
    { field: "message", headerName: "Message", width: 200 },
    { field: "accountName", headerName: "Account Name", width: 150 },
    { field: "serviceName", headerName: "Service Name", width: 150 },
    {
      field: "subscriptionPlan",
      headerName: "Subscription Plan",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: getButtonColor(params.value) , color: "white"}}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "resourceId", headerName: "Resource ID", width: 150 },
    {
      field: "usageQuantity",
      headerName: "Usage Quantity",
      width: 130,
      type: "number",
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      width: 130,
      type: "number",
    },
    {
      field: "timestamp",
      headerName: "Timestamp",
      width: 180,
      type: "dateTime",
      valueGetter: (params) => new Date(params.value),
    },
  ];

  const rows = billingData.map((entry) => {
    return { id: entry.customerId, ...entry };
  });

  if (!Array.isArray(billingData)) {
    return <div>No billing data available</div>;
  }

  return (
    <Paper style={{ height:400, width: "100%", marginTop:"10px", padding: "10px"}}>
      <DataGrid
        rows={rows} //billingData.map((entry, index) => ({ id: index, ...entry }))
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </Paper>
  );
};

BillingDisplay.propTypes = {
  billingData: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string,
      message: PropTypes.string,
      accountName: PropTypes.string,
      serviceName: PropTypes.string,
      subscriptionPlan: PropTypes.string,
      resourceId: PropTypes.string,
      usageQuantity: PropTypes.number,
      unitPrice: PropTypes.number,
      timestamp: PropTypes.string,
    })
  ),
};

export default BillingDisplay;
