import React from "react";


function MetroMapCon({ children }) {
  const style = {
    position: 'relative',
    top: '3vh',
    left: '1.5%',
    width: '56.5%',
    height: '445px',
    background: 'white 0% 0% no-repeat padding-box',
    borderRadius: '24px',
    //opacity: 1
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function Map({ children }) {
  const style = {
    position: 'absolute',
    top: '5%',
    left: '78.5%',
    width: '20%',
    height: '65%',
    //background: '0% 0% no-repeat padding-box',
    borderRadius: '24px',
    //opacity: 1,
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function Graph1({ children }) {
  const style = {
    position: 'absolute',
    top: '5%',
    left: '56.5%',
    width: '21%',
    height: '100%',
    background: 'orange 0% 0% no-repeat padding-box',
    borderRadius: '24px',
    opacity: '0.3',
    //text-align: center,
  };
  return <div style={style}>{children}</div>;
}

function Graph2({ children }) {
  const style = {
    position: 'absolute',
    top: '109.5%',
    left: '1.5%',
    width: '76%',
    height: '67.5%',
    background: 'green 0% 0% no-repeat padding-box',
    borderRadius: '24px' ,
    opacity: '1',
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}

function StationInfo({ children }) {
  const style = {
    position: 'absolute',
    top: '74%',
    left: '78.5%',
    width: '20%',
    height: '103%',
    background: 'orange 0% 0% no-repeat padding-box',
    borderRadius: '24px' ,
    opacity: '1',
    //text-align: center,
  };
  return <div style={style}>{children}</div>;
}

function Hide({ children }) {
  const style = {
    position: 'absolute',
    top: '105.5%',
    left: '1.5%',
    width: '76%',
    height: '100%',
    background: 'white 0% 0% no-repeat padding-box',
    borderRadius: '24px' ,
    opacity: '1',
    //text-align: center;
  };
  return <div style={style}>{children}</div>;
}


function Main({ children }) {
  const style = {
    position: 'absolute',
    width: '100%',
    height: '51vh',
    background: 'white no-repeat padding-box',
    borderRadius: '20px 20px 0px 0px',
    opacity: '1',
  };
  return <div style={style}>{children}</div>;
}

function Container({ children }) {
  const style = {
    position: "relative",
    width: '100%',
    height: '100%',
    background: 'rgb(57, 196, 150)',
  };
  return <div style={style}>{children}</div>;
}
export {Graph1, Graph2, StationInfo, Hide, MetroMapCon, Map, Main, Container };
