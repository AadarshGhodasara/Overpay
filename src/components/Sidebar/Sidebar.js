import React, { useState } from "react";
import { Layout } from "antd";
import "./Sidebar.scss";
import { images } from "../../config/images";
import GlobalMenu from "../Global/GlobalMenu/GlobalMenu";

export default function Sidebar() {
  const { Sider } = Layout;
  const [selectedMenuKey, setSelectedMenuKey] = useState("1");
  const getImageReactComponent = (img) => {
    let Component = img?.ReactComponent;
    return <Component />;
  };
  const handleOptionChange = (e) => {
    setSelectedMenuKey(e?.key);
  };
  const topMenuConst = [
    {
      key: "1",
      title: "Dashboard",
      icon: getImageReactComponent(images?.dashboard),
    },
    {
      key: "2",
      title: "Invoices",
      icon: getImageReactComponent(images?.invoices),
    },
    {
      key: "3",
      title: "Messages",
      icon: getImageReactComponent(images?.messages),
    },
    {
      key: "4",
      title: "My Wallets",
      icon: getImageReactComponent(images?.card),
    },
    {
      key: "5",
      title: "Activity",
      icon: getImageReactComponent(images?.activity),
    },
    {
      key: "6",
      title: "Analytics",
      icon: getImageReactComponent(images?.analytics),
    },
  ];
  const bottomMenuConst = [
    {
      key: "7",
      title: "Get Help",
      icon: getImageReactComponent(images?.getHelp),
    },
    {
      key: "8",
      title: "Settings",
      icon: getImageReactComponent(images?.settings),
    },
  ];
  return (
    <div className="SidebarStyle">
      <div className="HeaderLogo">
        <img src={images?.logo?.default} alt="Logo" />
      </div>
      <Sider width={250} className="SiderStyle">
        <GlobalMenu
          options={topMenuConst}
          defaultSelectedKeys={[selectedMenuKey]}
          onClick={handleOptionChange}
          selectedKeys={[selectedMenuKey]}
        />
        <div className="bottomMenu">
          <GlobalMenu
            options={bottomMenuConst}
            onClick={handleOptionChange}
            selectedKeys={[selectedMenuKey]}
          />
        </div>
      </Sider>
    </div>
  );
}
