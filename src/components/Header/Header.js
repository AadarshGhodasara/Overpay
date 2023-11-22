import { Button, Dropdown, Switch } from "antd";
import React from "react";
import { images } from "../../config/images";
import { DownOutlined } from "@ant-design/icons";
import "./Header.scss";
import UserIcon from "../Icons/UserIcon/UserIcon";
import SettingIcon from "../Icons/SettingIcon/SettingIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";

export default function Header({ title }) {
  const items = [
    {
      key: "1",
      label: (
        <div className="userNameWrapper">
          <span>Alesia Karapova</span>
          <p>Business account</p>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "My Account",
      icon: <UserIcon />,
    },
    {
      key: "3",
      label: "Setting",
      icon: <SettingIcon />,
    },
    {
      key: "4",
      label: "Logout",
      icon: <LogoutIcon />,
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: (
        <div className="darkModeOptionWrapper">
          <span>Dark mode</span>
          <Switch />
        </div>
      ),
    },
  ];

  return (
    <div className="HeaderStyle">
      <h1>{title}</h1>
      <div className="HeaderStyle_rightSideContent">
        <Button className="headerBtn" type="default">
          <img src={images?.search?.default} alt="search icon" />
        </Button>
        <Button className="headerBtn" type="default">
          <img src={images?.bell?.default} alt="bell icon" />
        </Button>
        <Dropdown
          className="headerDropdown"
          menu={{ items }}
          overlayClassName="dropdownCardStyle"
        >
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
