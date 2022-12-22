import React from "react";

const Separator = ({ color }) => {
  return (
    <hr style={{ width: "40%", borderTop: `1px solid var(--${color})` }} />
  );
};

export default Separator;
