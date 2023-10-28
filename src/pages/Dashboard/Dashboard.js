import React from "react";
import "./Dashboard.scss";
import DashboardBaner from "../../components/DashboardBaner/DashboardBaner";
export default function Dashboard() {
  return (
    <div className="dashboardStyle">
      <div className="leftSideContent">
        <DashboardBaner />
      </div>
      <div className="rightSideContent">b</div>
    </div>
  );
}
