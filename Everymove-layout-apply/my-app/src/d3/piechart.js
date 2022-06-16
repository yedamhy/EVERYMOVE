import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  datasets: [
    {
      data: [45, 55], //data들어가는 자리
      backgroundColor: ["#1ED994", "#4E5266"],
      hoverBackgroundColor: ["#1ED994", "#4E5266"],
      borderWidth: 3
    }
  ]
};

export default function App() {
  return(<Doughnut data={data} />);
}