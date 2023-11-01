import React from "react";
import "./Dashboard.scss";
import DashboardBaner from "../../components/DashboardBaner/DashboardBaner";
import { Button, Col, Dropdown, Row, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import WalletSection from "../../components/WalletSection/WalletSection";
import QuickTransferSection from "../../components/QuickTransferSection/QuickTransferSection";
export default function Dashboard() {
  const items = [
    {
      key: "1",
      label: "Jan 10 - Jan 16",
    },
  ];
  return (
    <div className="dashboardStyle">
      <Row gutter={32}>
        <Col span={17}>
          <div className="leftSideContent">
            <DashboardBaner />
            <div className="leftSideContent_chart">
              <div className="leftSideContent_chart_header">
                <h2>Money Flow</h2>
                <div className="rightSideContent">
                  <div className="legend">
                    <span className="legend_blue"></span> Income
                  </div>
                  <div className="legend">
                    <span className="legend_grey"></span> Expenses
                  </div>
                  <Select
                    defaultValue="10JanTo16Jan"
                    options={[
                      { value: "10JanTo16Jan", label: "Jan 10 - Jan 16" },
                      { value: "17JanTo22Jan", label: "Jan 17 - Jan 22" },
                      { value: "23JanTo28Jan", label: "Jan 23 - Jan 28" },
                    ]}
                    className="timeDropdown"
                  ></Select>
                </div>
              </div>
            </div>
            <div className="leftSideContent_transaction">
              <div className="leftSideContent_transaction_header">
                <h2>Recent Transactions</h2>
                <div className="rightSideContent">
                  <Button className="viewAllBtn">
                    View all <RightOutlined />
                  </Button>
                </div>
              </div>
              <div className="leftSideContent_transaction_content">
                <TransactionTable />
              </div>
            </div>
          </div>
        </Col>
        <Col span={7}>
          <div className="rightSideContent">
            <WalletSection />
            <QuickTransferSection />
          </div>
        </Col>
      </Row>
    </div>
  );
}
