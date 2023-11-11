import { Input } from "antd";
import React from "react";
import "./SearchInput.scss";
export default function SearchInput({ placeholder, ...props }) {
  const { Search } = Input;
  return <Search placeholder={placeholder} {...props} />;
}
