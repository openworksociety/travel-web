import { Grid } from "@material-ui/core";
import React from "react";
import EmpTypeGrid from "../components/EmpTypeGrid";

function EmployeeDashboard() {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <EmpTypeGrid />
        </Grid>
        <Grid item xs={6}>
          <EmpTypeGrid />
        </Grid>
        <Grid item xs={6}>
          <EmpTypeGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default EmployeeDashboard;
