import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { routeNames } from "./constants";

const SideBar = lazy(() => import("layout/sidebar"));
const Dashboard = lazy(() => import("pages/dashboard"));
const Homefeed = lazy(() => import("pages/homefeed"));

function AppRoutes(props) {
  const { showSuccessMsg, showErrorMsg, errorMsg, successMsg } = props.loader;

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {(showSuccessMsg || showErrorMsg) && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <Alert
              severity={showSuccessMsg ? "success" : "error"}
              sx={{ width: "100%" }}
            >
              {showSuccessMsg ? successMsg : errorMsg}
            </Alert>
          </Snackbar>
        )}
        <SideBar>
          <Routes>
            <Route path={routeNames.dashboard.route} element={<Dashboard />} />
            <Route path={routeNames.homefeed.route} element={<Homefeed />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </SideBar>
      </Suspense>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ user, loader }) => ({ user, loader });
export default connect(mapStateToProps, null)(AppRoutes);
