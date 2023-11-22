import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function LayoutWrapper({ children, sideBar, header, ...props }) {
  return (
    <div className="LayoutWrapper">
      {sideBar && <Sidebar />}
      {header ? (
        <div className="contentWrapper">
          <Header title={props?.headerTitle} />
          <div className="content">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
