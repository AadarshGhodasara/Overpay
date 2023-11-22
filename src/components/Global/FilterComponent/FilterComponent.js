import { Popover } from "antd";
import React, { useState } from "react";
import GlobalButton from "../GlobalButton/GlobalButton";
import FilterIcon from "../../Icons/FilterIcon/FilterIcon";

export default function FilterComponent({ content, ...props }) {
  const [popoverVisible, setPopoverVisible] = useState();
  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      open={popoverVisible}
      onOpenChange={(visible) => setPopoverVisible(visible)}
      content={content}
      {...props}
    >
      <GlobalButton title={"Filter"} icon={<FilterIcon />} type="default" />
    </Popover>
  );
}
