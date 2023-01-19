import React from "react";
import { Grid } from "@mui/material";

function Dashboard(props) {
  return (
    <>
      <h2>Dashboard</h2>

      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className="p-10">
            <span>Ameen</span>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
