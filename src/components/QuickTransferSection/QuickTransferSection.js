import React from "react";
import "./QuickTransferSection.scss";
import MasterCardLogo from "../Icons/MasterCardLogo/MasterCardLogo";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import { Button } from "antd";
export default function QuickTransferSection() {
  return (
    <div className="QuickTransferSectionStyle">
      <div className="QuickTransferSectionStyle_header">
        <h2>Quick Transfer</h2>
      </div>
      <div className="QuickTransferSectionStyle_cardSelection">
        <div className="cardLogoAndType">
          <MasterCardLogo />
          <span>Debit</span>
        </div>
        <div className="cardAmountWrapper">
          <span>$10,431</span>
          <ChevronDownIcon />
        </div>
      </div>
      <div className="QuickTransferSectionStyle_InputAmountSection">
        <span className="inputLabel">Enter amount</span>
        <div className="inputWrapper">
          <span>$1,24</span>
          <div>ABC</div>
        </div>
      </div>
      <div className="buttonWrapper">
        <Button type="default">Send Money</Button>
      </div>
    </div>
  );
}
