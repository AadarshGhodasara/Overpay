import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function LayoutWrapper({ children }) {
  return (
    <div className="LayoutWrapper">
      <Sidebar />
      {children}
    </div>
  );
}
