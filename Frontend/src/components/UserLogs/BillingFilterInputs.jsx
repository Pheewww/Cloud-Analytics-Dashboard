import { TextField, Button, Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PropTypes from "prop-types";

const BillingFilterInputs = ({ onSearch, onInputChange }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Customer ID"
          onChange={(e) => onInputChange("customerId", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Account Name"
          onChange={(e) => onInputChange("accountName", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Service Name"
          onChange={(e) => onInputChange("serviceName", e.target.value)}
        />
      </Grid>
      <Grid item>
        <Tooltip title="Use regular expressions for advanced search patterns.">
          <TextField
            label="Message"
            onChange={(e) => onInputChange("message", e.target.value)}
          />
          <HelpOutlineIcon />
        </Tooltip>
      </Grid>
      <Grid item>
        <TextField
          label="Subscription Plan"
          onChange={(e) => onInputChange("subscriptionPlan", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Resource ID"
          onChange={(e) => onInputChange("resourceId", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Usage Quantity"
          type="number"
          onChange={(e) => onInputChange("usageQuantity", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Unit Price"
          type="number"
          onChange={(e) => onInputChange("unitPrice", e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Timestamp"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => onInputChange("timestamp", e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

BillingFilterInputs.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default BillingFilterInputs;
