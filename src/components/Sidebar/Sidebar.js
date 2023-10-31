import React from "react";
import { Layout, Menu } from "antd";
import "./Sidebar.scss";
import { images } from "../../config/images";

export default function Sidebar() {
  const { Sider } = Layout;
  const getImageReactComponent = (img) => {
    let Component = img?.ReactComponent;
    return <Component />;
  };
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
          <Menu.Item key={"1"} icon={getImageReactComponent(images?.dashboard)}>
            Dashboard
          </Menu.Item>
          <Menu.Item key={"2"} icon={getImageReactComponent(images?.invoices)}>
            Invoices
          </Menu.Item>
          <Menu.Item key={"3"} icon={getImageReactComponent(images?.messages)}>
            Messages
          </Menu.Item>
          <Menu.Item key={"4"} icon={getImageReactComponent(images?.card)}>
            My Wallets
          </Menu.Item>
          <Menu.Item key={"5"} icon={getImageReactComponent(images?.activity)}>
            Activity
          </Menu.Item>
          <Menu.Item key={"6"} icon={getImageReactComponent(images?.analytics)}>
            Analytics
          </Menu.Item>
        </Menu>

        <div className="bottomMenu">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key={"8"} icon={getImageReactComponent(images?.getHelp)}>
              Get Help
            </Menu.Item>
            <Menu.Item
              key={"9"}
              icon={getImageReactComponent(images?.settings)}
            >
              Settings
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </div>
  );
}
