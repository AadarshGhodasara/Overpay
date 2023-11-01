import React from "react";
import "./WalletSection.scss";
import DotsMenuIcon from "../Icons/DotsMenuIcon/DotsMenuIcon";
import { Carousel } from "antd";
import CardComponent from "./CardComponent/CardComponent";
import CustomButton from "../CustomButton/CustomButton";
import { images } from "../../config/images";

export default function WalletSection() {
  return (
    <div className="WalletSectionStyle">
      <div className="WalletSectionStyle_header">
        <h2>Wallet</h2>
        <DotsMenuIcon />
      </div>
      <Carousel>
        <div className="carouselItem">
          <CardComponent />
        </div>
        <div className="carouselItem">
          <CardComponent />
        </div>
      </Carousel>
      <div className="actionButtons">
        <CustomButton
          imgAlt={"send money"}
          iconUrl={images?.cardSend?.default}
          btnText={"Send"}
        />
        <CustomButton
          imgAlt={"receive money"}
          iconUrl={images?.cardReceive?.default}
          btnText={"Receive"}
        />
        <CustomButton
          imgAlt={"invoicing"}
          iconUrl={images?.invoicing?.default}
          btnText={"Invoicing"}
        />
        <CustomButton
          imgAlt={"more"}
          iconUrl={images?.moreIcon?.default}
          btnText={"More"}
        />
      </div>
    </div>
  );
}
