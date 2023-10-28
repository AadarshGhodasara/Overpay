import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function LayoutWrapper({ children }) {
  return (
    <div className="LayoutWrapper">
      <Sidebar />
      <div className="contentWrapper">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
