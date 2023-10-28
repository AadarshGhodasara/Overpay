import React from "react";
import { Layout, Menu } from "antd";
import "./Sidebar.scss";
import { images } from "../../config/images";

export default function Sidebar() {
  const { Sider } = Layout;
  // const {SubMenu} = Menu2
  // [
  //   { key: "1", label: "MENU 1" },
  //   { key: "2", label: "MENU 2" },
  //   { key: "3", label: "MENU 3" },
  //   { key: "4", label: "MENU 4" },
  //   { key: "5", label: "MENU 5" },
  // ];
  return (
    <div className="SidebarStyle">
      <div className="HeaderLogo">
        <img src={images?.logo?.default} alt="Logo" />
      </div>
      <Sider width={250} className="SiderStyle">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key={"1"}>MENU 1</Menu.Item>
          <Menu.Item key={"2"}>MENU 2</Menu.Item>
          <Menu.Item key={"3"}>MENU 3</Menu.Item>
          <Menu.Item key={"4"}>MENU 4</Menu.Item>
          <Menu.Item key={"5"}>MENU 5</Menu.Item>
          <Menu.Item key={"6"}>MENU 6</Menu.Item>
          <Menu.Item key={"7"}>MENU 7</Menu.Item>
        </Menu>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key={"6"}>MENU 6</Menu.Item>
          <Menu.Item key={"7"}>MENU 7</Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
