/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./Sidebar.scss";
import { images } from "../../config/images";
import GlobalMenu from "../Global/GlobalMenu/GlobalMenu";
import { routes } from "../../config/routes";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { Sider } = Layout;
  const [selectedMenuKey, setSelectedMenuKey] = useState("1");
  const getImageReactComponent = (img) => {
    let Component = img?.ReactComponent;
    return <Component />;
  };
  const handleOptionChange = (e) => {
    setSelectedMenuKey(e?.key);
    let selectedMenuProps = e?.item?.props;
    if (selectedMenuProps?.path) {
      navigate(selectedMenuProps?.path);
    }
  };
  const topMenuConst = [
    {
      key: "1",
      title: "Dashboard",
      icon: getImageReactComponent(images?.dashboard),
      path: routes?.dashboard?.path,
    },
    {
      key: "2",
      title: "Invoices",
      path: routes?.invoices?.path,
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

  useEffect(() => {
    const renderedRoute = [...topMenuConst, ...bottomMenuConst]?.filter(
      (item) => item?.path === location?.pathname
    )?.[0];
    setSelectedMenuKey(renderedRoute?.key ?? "1");
  }, []);

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
