import { Input } from "antd";
import React from "react";

export default function TextInput({ placeholder, isPasswordInput, ...props }) {
  return isPasswordInput ? (
    <Input.Password placeholder={placeholder} {...props} />
  ) : (
    <Input placeholder={placeholder} {...props} />
  );
}
