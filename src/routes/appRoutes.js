import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeNames } from "./routeNames";

const SideBar = lazy(() => import("layout/sidebar")); // Dynamic imports for code-splitting
const Homefeed = lazy(() => import("pages/homefeed"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <SideBar>
          <Routes>
            <Route path={routeNames.homefeed.route} element={<Homefeed />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </SideBar>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
