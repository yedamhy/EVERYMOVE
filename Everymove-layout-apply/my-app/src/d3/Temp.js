import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import * as d3 from "d3";
import { axisLeft } from "d3";

const width = 200;
const height = 100
function Temp({ temp }) {
  const [data, setData] = useState([0, 0]);
  
  let station = temp.station;
  let num_passenger = temp.passenger ;
  let num_disabled = temp.disabled ;
  let num_rate = Math.round(temp.passenger / temp.disabled);
  console.log(num_disabled, num_passenger)
  
  const svgRef = useRef();
  useEffect(() => {

    const svg = select(svgRef.current)
      .append("svg")
        .attr("width",width)
        .attr("height",height);

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

  return (
    <div style={{ padding: "20px" }}>
      <svg ref={svgRef}>
        {data}
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default Temp;