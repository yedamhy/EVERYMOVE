import React, {useState, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({data}){
  let getValues = Object.values({data}).map((e, index) => {
    return console.log(e, index);})

  let Data = {
    datasets: [
      {
        data: getValues, //data들어가는 자리 즉 getValues를 넣으면 됨.
        backgroundColor: ["#4E5206", "#4E5266"],
        hoverBackgroundColor: ["#1ED994", "#FFFF80"],
        borderWidth: 3
      }
    ]
  };
  return(
  <Doughnut data={Data} />
  );
}
export default PieChart;
