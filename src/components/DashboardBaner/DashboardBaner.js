import React from "react";
import "./DashboardBaner.scss";
import { images } from "../../config/images";
import { Button } from "antd";
export default function DashboardBaner() {
  return (
    <div className="DashboardBanerStyle">
      <div className="DashboardBanerStyle_image">
        <img
          src={images?.dashboardBanerImg?.default}
          alt="dashboard baner img"
        />
      </div>
      <div className="DashboardBanerStyle_content">
        <h1>Unlimited Cashback</h1>
        <p>Instant 2% back on all your spend to your account</p>
        <Button type="default" className="upgradeBtn">
          Upgrade Now{" "}
          <img
            src={images?.rightArrowIcon?.default}
            alt="dashboard baner img"
          />
        </Button>
      </div>
    </div>
  );
}
