import { Menu } from "antd";
import React from "react";

export default function GlobalMenu({ selectedMenuKey, options, ...props }) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[selectedMenuKey]}
      selectedKeys={[selectedMenuKey]}
      style={{ height: "100%", borderRight: 0 }}
      {...props}
    >
      {options?.map((menu) => (
        <Menu.Item key={menu?.key} icon={menu?.icon}>
          {menu?.title}
        </Menu.Item>
      ))}
    </Menu>
  );
}
