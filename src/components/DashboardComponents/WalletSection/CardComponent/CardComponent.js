import React from "react";
import "./CardComponent.scss";
import ChipIcon from "../../../Icons/ChipIcon/ChipIcon";
import OverpayLogo from "../../../Icons/OverpayLogo/OverpayLogo";
import EyeIcon from "../../../Icons/EyeIcon/EyeIcon";
import VisaIcon from "../../../Icons/VisaIcon/VisaIcon";
export default function CardComponent() {
  return (
    <div className="CardComponentStyle">
      <div className="CardComponentStyle_header">
        <ChipIcon />
        <div className="overpayLogo">
          <OverpayLogo />
        </div>
      </div>
      <div className="CardComponentStyle_balanceDetails">
        <div className="balanceAndEyeWrapper">
          <span>Balance</span>
          <EyeIcon />
        </div>
        <div className="amountDetailsWrapper">
          <h1>$24,098.00</h1>
          <VisaIcon />
        </div>
      </div>
    </div>
  );
}
