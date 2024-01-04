import React, { memo } from "react";

const Child = ({ Learning }) => {
  console.log("hello from child component");
  return <div>Child</div>;
};
export default memo(Child);
