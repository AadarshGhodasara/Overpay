import React from "react";
import "./WalletSection.scss";
import DotsMenuIcon from "../Icons/DotsMenuIcon/DotsMenuIcon";
import { Carousel } from "antd";

export default function WalletSection() {
  return (
    <div className="WalletSectionStyle">
      <div className="WalletSectionStyle_header">
        <h2>Wallet</h2>
        <DotsMenuIcon />
      </div>
      {/* <Carousel>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel> */}
    </div>
  );
}
