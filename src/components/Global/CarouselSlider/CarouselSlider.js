import { Carousel } from "antd";
import React from "react";

export default function CarouselSlider({ items, ...props }) {
  return <Carousel {...props}>{items?.map((item) => item?.content)}</Carousel>;
}
