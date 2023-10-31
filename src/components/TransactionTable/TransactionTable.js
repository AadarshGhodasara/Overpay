import { Col, Row } from "antd";
import React from "react";
import { images } from "../../config/images";
import "./TransactionTable.scss";

export default function TransactionTable() {
  return (
    <div className="TransactionTableStyle">
      <Row gutter={0} className="TransactionTableStyle_row">
        <Col span={2}>
          <div className="imageIcon">
            <img src={images?.bitcoinIcon?.default} alt="userIcon" />
          </div>
        </Col>
        <Col span={8}>
          <span className="transactionLabel">Bitcoin transactions</span>
        </Col>

        <Col span={6}>
          <span className="dateLabel">Jan 16, 2022</span>
        </Col>

        <Col span={4}>
          <span className="amountLabel">-$835.00</span>
        </Col>

        <Col span={4}>
          <span className="statusLabel">Success</span>
        </Col>
      </Row>
      <Row gutter={0} className="TransactionTableStyle_row">
        <Col span={2}>
          <div className="imageIcon">
            <img src={images?.bitcoinIcon?.default} alt="userIcon" />
          </div>
        </Col>
        <Col span={8}>
          <span className="transactionLabel">Bitcoin transactions</span>
        </Col>

        <Col span={6}>
          <span className="dateLabel">Jan 16, 2022</span>
        </Col>

        <Col span={4}>
          <span className="amountLabel">-$835.00</span>
        </Col>

        <Col span={4}>
          <span className="statusLabel">Success</span>
        </Col>
      </Row>
      <Row gutter={0} className="TransactionTableStyle_row">
        <Col span={2}>
          <div className="imageIcon">
            <img src={images?.bitcoinIcon?.default} alt="userIcon" />
          </div>
        </Col>
        <Col span={8}>
          <span className="transactionLabel">Bitcoin transactions</span>
        </Col>

        <Col span={6}>
          <span className="dateLabel">Jan 16, 2022</span>
        </Col>

        <Col span={4}>
          <span className="amountLabel">-$835.00</span>
        </Col>

        <Col span={4}>
          <span className="statusLabel">Success</span>
        </Col>
      </Row>
      <Row gutter={0} className="TransactionTableStyle_row">
        <Col span={2}>
          <div className="imageIcon">
            <img src={images?.bitcoinIcon?.default} alt="userIcon" />
          </div>
        </Col>
        <Col span={8}>
          <span className="transactionLabel">Bitcoin transactions</span>
        </Col>

        <Col span={6}>
          <span className="dateLabel">Jan 16, 2022</span>
        </Col>

        <Col span={4}>
          <span className="amountLabel">-$835.00</span>
        </Col>

        <Col span={4}>
          <span className="statusLabel">Success</span>
        </Col>
      </Row>
    </div>
  );
}
