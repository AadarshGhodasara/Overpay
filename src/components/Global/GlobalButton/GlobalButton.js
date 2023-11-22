import { Button } from "antd";
import React from "react";

export default function GlobalButton({
  title,
  icon,
  isPostfixIcon = false,
  ...props
}) {
  return (
    <Button icon={!isPostfixIcon ? icon : undefined} {...props}>
      {title}
      {isPostfixIcon ? icon : ""}
    </Button>
  );
}
