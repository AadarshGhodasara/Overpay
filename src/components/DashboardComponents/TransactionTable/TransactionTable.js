import { Table } from "antd";
import React from "react";
import { images } from "../../../config/images";
import "./TransactionTable.scss";
import Calendar from "../../Icons/Calendar/Calendar";
import { getFirstLetterCapital } from "../../../config/utils";

export default function TransactionTable() {
  const columns = [
    {
      dataIndex: "img",
      render: (url) => (
        <div className="userIconWrapper">
          <img src={url} alt="userIcon" />
        </div>
      ),
    },
    {
      dataIndex: "transactionLabel",
      render: (transactionLabel) => (
        <span className="transactionLabel">{transactionLabel}</span>
      ),
    },
    {
      dataIndex: "date",
      render: (date) => (
        <div className="dateColumnWrapper">
          <Calendar />
          <span className="dateLabel">{date}</span>
        </div>
      ),
    },
    {
      dataIndex: "amount",
      render: (amount) => <span className="amountLabel">{amount}</span>,
    },
    {
      dataIndex: "status",
      render: (status) => (
        <div className="statusLabelWrapper">
          <span
            className={`statusLabel statusLabel_${
              status === "success" ? "success" : "pending"
            }`}
          >
            {getFirstLetterCapital(status)}
          </span>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      img: images?.bitcoinIcon?.default,
      transactionLabel: "Bitcoin transactions",
      date: "Jan 16, 2022",
      amount: "-$835.00",
      status: "success",
    },
    {
      key: "2",
      img: images?.userTransactionIcon?.default,
      transactionLabel: "Sent to Antonio",
      date: "Jan 14, 2022",
      amount: "-$150.00",
      status: "pending",
    },
    {
      key: "3",
      img: images?.paypalIcon?.default,
      transactionLabel: "Witdraw Paypal",
      date: "Jan 13, 2022",
      amount: "+$200.00",
      status: "success",
    },
  ];
  return (
    <div className="TransactionTableStyle">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
}
