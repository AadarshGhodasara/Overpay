import { Col, Row } from "antd";
import React from "react";
import { images } from "../../../config/images";
import "./TransactionTable.scss";
import Calendar from "../../Icons/Calendar/Calendar";
import { getFirstLetterCapital } from "../../../config/utils";

export default function TransactionTable() {
  const data = [
    {
      img: images?.bitcoinIcon?.default,
      transactionLabel: "Bitcoin transactions",
      date: "Jan 16, 2022",
      amount: "-$835.00",
      status: "success",
    },
    {
      img: images?.userTransactionIcon?.default,
      transactionLabel: "Sent to Antonio",
      date: "Jan 14, 2022",
      amount: "-$150.00",
      status: "pending",
    },
    {
      img: images?.paypalIcon?.default,
      transactionLabel: "Witdraw Paypal",
      date: "Jan 13, 2022",
      amount: "+$200.00",
      status: "success",
    },
  ];

  return (
    <div className="TransactionTableStyle">
      <Row gutter={[0, 12]} className="TransactionTableStyle_row">
        {data?.map((item) => (
          <>
            <Col span={2} className="imageIcon">
              <img src={item?.img} alt="userIcon" />
            </Col>
            <Col span={22}>
              <Row gutter={0} className="subRow">
                <Col span={8}>
                  <span className="transactionLabel">
                    {item?.transactionLabel}
                  </span>
                </Col>
                <Col span={6} className="dateColumn">
                  <Calendar />
                  <span className="dateLabel">{item?.date}</span>
                </Col>
                <Col span={5}>
                  <span className="amountLabel">{item?.amount}</span>
                </Col>
                <Col span={5} className="statusLabelWrapper">
                  <span
                    className={`statusLabel statusLabel_${
                      item?.status === "success" ? "success" : "pending"
                    }`}
                  >
                    {getFirstLetterCapital(item?.status)}
                  </span>
                </Col>
              </Row>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
}
