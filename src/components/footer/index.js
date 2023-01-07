import React, { useState } from "react";
import { Tabs } from "antd";
import "./footer.css"
const Footer = () => {
  const [tabPosition, setTabPosition] = useState("bottom");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div className="footer">
      <Tabs
        tabPosition={tabPosition}
        items={new Array(5).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </div>
  );
};
export default Footer;
