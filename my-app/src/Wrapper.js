import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
    width: "50vh",
    height: "50vh",
  };
  return <div style={style}>{children}</div>;
}

function Container({ children }) {
  const style = {
    display: "flex",
    alignItems: "flex-start",
  };
  return <div style={style}>{children}</div>;
}
export { Wrapper, Container };
