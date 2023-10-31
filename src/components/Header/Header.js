import { Button, Dropdown } from "antd";
import React from "react";
import { images } from "../../config/images";
import { DownOutlined } from "@ant-design/icons";
import "./Header.scss";

export default function Header() {
  const items = [
    {
      key: "1",
      label: "My Account",
    },
    {
      key: "2",
      label: "Setting",
    },
  ];

  return (
    <div className="HeaderStyle">
      <h1>Dashboard</h1>
      <div className="HeaderStyle_rightSideContent">
        <Button className="headerBtn" type="default">
          <img src={images?.search?.default} alt="search icon" />
        </Button>
        <Button className="headerBtn" type="default">
          <img src={images?.bell?.default} alt="bell icon" />
        </Button>
        <Dropdown className="headerDropdown" menu={{ items }}>
          <a>
            <span className="userImage">
              <img src={images?.userImg?.default} alt="user img" />
            </span>
            <span className="userName">Alesia K.</span>
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}
