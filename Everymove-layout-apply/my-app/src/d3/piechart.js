import React, { useRef, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
//import { renderMatches } from "react-router";
import { csv } from "d3-fetch";
import passengers from "../metro-map/passenger_2021.csv";

const readCsv = async () => {
  let file = await csv(passengers);
  return file;
};

let psgr = readCsv();

function PieChart({ temp }) {
  let labels = Object.keys({ temp }).map((e, index) => {
    return console.log(e, index); //label - 즉, passenger , disabled
  });

  psgr.then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].station);
      console.log(data[i].passenger);
      console.log(data[i].disabled);
    }
  });

  let numbers = Object.values({ temp }).map((e, index) => {
    return console.log(e, index); // 이용객 수 받아오기
  });

  const state = {
    labels,
    datasets: [
      {
        data: numbers, //데이터
        backgroundColor: ["#F54EA2", "#41b6e6"], //컬러지정
        hoverBackgroundColor: ["#b9006e", "#005792"], //hover 컬러 지정
      },
    ],
  };

  return (
    <div>
      <Pie data={state} />
    </div>
  );
}
export default PieChart;

/*function PieChart({ temp }) {
    
    const [data, setData] = useState([25]);
  
  //temp.map
  let station = temp.station;
  let num_passenger = temp.passenger ;
  let num_disabled = temp.disabled ;

  console.log(station);
  console.log(num_passenger);
  console.log(num_disabled);

  /*const state = { ,
    dataset : [{
        label : "이용객",
        data :
        backgroundColor: ["#27B373", "#E0DD24"],
        hoverBackgroundColor: ["#108DE0", "#E6775E"]
    }]
    
  };*/

/* useEffect (() => {
    setData([num_passenger, num_disabled]);
  }); */

/*
  const svgRef = useRef();
  useEffect(() => {

    setData([num_passenger, num_disabled]);

    const svg = select(svgRef.current);
    // scale
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 50300000]).range([0, 1500]);

    // axis
    const xAxis = axisBottom(xScale);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisLeft(yScale).ticks(5);
    svg.select(".y-axis").style("transform", "translateX(10px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index)) // index xScale 통해 스케일링한 값을 x좌표로 지정
      .attr("y", yScale)
      .attr("width", xScale.bandwidth()) // xScale의 bandwidth만큼 width 설정
      .attr("height", (value, index) =>50300000- yScale(value)); // svg 아래에 붙이기 위해서 svg viewBox 고려해 변경
  }, [data]);
*/
/* return (
    <div>
        <Pie data = {state} options = {{
            tooltips: {
                bodyFontSize: 20,
                callbacks: {
                  label: function (tooltipItem, data) {
                    // console.log({ tooltipItem, data });
                    const label = data.labels[tooltipItem.index]; //index gives the the index of this data item in the dataset
                    // console.log(data.labels[2])
                    //const value = formatNumber(

                   // );
                   // return `${label}: $${value}`; 
        }
        }} }} />
        </div> ); */
/*<div style={{ padding: "100px" }}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
} 
export default PieChart; */
