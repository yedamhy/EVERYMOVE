import React from "react";

function Container({ children }) {
  const style = {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "rgb(57, 196, 150)",
  };
  return <div style={style}>{children}</div>;
}

function Main({ children }) {
  const style = {
    position: "absolute",
    left: "14%",
    width: "100%",
    height: "100vh",
    background: "White",
    borderRadius: "24px",
    opacity: "1",
  };
  return <div style={style}>{children}</div>;
}

function SideBar({ children }) {
  const style = {
    position: "absolute",
    width: "17%",
    height: "100vh",
    background: "#6DB387",
    borderRadius: "0",
    opacity: "1",
  };
  return <div style={style}>{children}</div>;
}

function MetroMapCon({ children }) {
  const style = {
    position: "relative",
    top: "2vh",
    left: "1%",
    width: "50%",
    height: "345px",
    background: "white",
    borderRadius: "24px",
    //border: '20px solid beige',
    //opacity: 1
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function Map({ children }) {
  const style = {
    position: "absolute",
    top: "2%",
    left: "51%",
    width: "32%",
    height: "45%",
    //background: '0% 0% no-repeat padding-box',
    borderRadius: "24px",
    //opacity: 1,
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function Graph1({ children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "1%",
    width: "48%",
    height: "40%",
    background: "orange 0% 0% no-repeat padding-box",
    borderRadius: "24px",
    opacity: "0.3",
    //text-align: center,
  };
  return <div style={style}>{children}</div>;
}

function Graph2({ children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "16%",
    height: "40%",
    background: "green 0% 0% no-repeat padding-box",
    borderRadius: "24px",
    opacity: ".5",
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function StationInfo({ children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "67%",
    width: "16%",
    height: "40%",
    background: "orange 0% 0% no-repeat padding-box",
    borderRadius: "24px",
    opacity: ".7",
    textAlign: "center",
  };
  return <div style={style}>{children}</div>;
}

function Hide({ children }) {
  const style = {
    position: "absolute",
    top: "47.0%",
    left: "1%",
    width: "50%",
    height: "100%",
    background: "white 0% 0% no-repeat padding-box",
    //borderRadius: '24px' ,
    opacity: "1",
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

export {
  Container,
  Main,
  SideBar,
  MetroMapCon,
  Map,
  Graph1,
  Graph2,
  StationInfo,
  Hide,
};
