import React, { useState } from "react";
import "./QuickTransferSection.scss";
import MasterCardLogo from "../Icons/MasterCardLogo/MasterCardLogo";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import { Button, Input } from "antd";
import { images } from "../../config/images";
export default function QuickTransferSection() {
  const [amount, setAmount] = useState(124);

  const handleAmountChange = (e) => {
    setAmount(e?.target?.value);
  };
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
          <span>$</span>
          <Input
            className="amountField"
            value={amount}
            onChange={handleAmountChange}
          />
          <div className="userImgWrapper">
            <img
              src={images?.userTransactionIcon?.default}
              alt="user images one"
            />
            <img src={images?.userImgTwo?.default} alt="another user images" />
          </div>
        </div>
      </div>
      <div className="buttonWrapper">
        <Button type="default">Send Money</Button>
      </div>
    </div>
  );
}
