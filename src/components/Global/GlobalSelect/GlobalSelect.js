import { Select } from "antd";
import React from "react";

export default function GlobalSelect({ options, defaultValue, ...props }) {
  return (
    <Select defaultValue={defaultValue} options={options} {...props}></Select>
  );
}
