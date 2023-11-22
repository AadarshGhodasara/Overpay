import React from "react";
import "./Dashboard.scss";
import DashboardBaner from "../../components/DashboardComponents/DashboardBaner/DashboardBaner";
import { Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import TransactionTable from "../../components/DashboardComponents/TransactionTable/TransactionTable";
import WalletSection from "../../components/DashboardComponents/WalletSection/WalletSection";
import QuickTransferSection from "../../components/DashboardComponents/QuickTransferSection/QuickTransferSection";
import GlobalButton from "../../components/Global/GlobalButton/GlobalButton";
import GlobalSelect from "../../components/Global/GlobalSelect/GlobalSelect";
import LineChart from "../../components/Global/LineChart/LineChart";

export default function Dashboard() {
  const sampleDataset = [
    {
      backgroundColor: "#194BFB",
      borderColor: "#194BFB",
      key: "income",
      label: "Income",
      lineTension: 0,
      data: [150, 500, 600, 200, 600, 1000, 550],
    },
    {
      backgroundColor: "#1A202C",
      borderColor: "#1A202C",
      key: "expenses",
      label: "Expenses",
      lineTension: 0,
      data: [60, 230, 500, 1000, 60, 100, 250],
    },
  ];
  const sampleLabels = [
    "Jan 10",
    "Jan 11",
    "Jan 12",
    "Jan 13",
    "Jan 14",
    "Jan 15",
    "Jan 16",
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
                  <GlobalSelect
                    defaultValue="10JanTo16Jan"
                    options={[
                      { value: "10JanTo16Jan", label: "Jan 10 - Jan 16" },
                      { value: "17JanTo22Jan", label: "Jan 17 - Jan 22" },
                      { value: "23JanTo28Jan", label: "Jan 23 - Jan 28" },
                    ]}
                    className="timeDropdown"
                  />
                </div>
              </div>
              <div className="leftSideContent_chart_graphWrapper">
                <LineChart
                  labels={sampleLabels}
                  datasets={sampleDataset}
                  metaData={{
                    allowDecimals: false,
                    maintainAspectRatio: false,
                    isCurrency: true,
                    yAxisLable: "",
                    xAxisLabel: "",
                    displayLegend: false,
                    tooltipIntersect: false,
                    tooltipMode: "index",
                  }}
                />
              </div>
            </div>
            <div className="leftSideContent_transaction">
              <div className="leftSideContent_transaction_header">
                <h2>Recent Transactions</h2>
                <div className="rightSideContent">
                  <GlobalButton
                    title={"View all"}
                    icon={<RightOutlined />}
                    className="viewAllBtn"
                    isPostfixIcon
                  />
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
