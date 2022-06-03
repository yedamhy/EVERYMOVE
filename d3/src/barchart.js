import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";

function Barchart() {
    const [data, setData] = useState([24, 30, 45, 70, 25]);
    const svgRef2 = useRef(null);
    
    useEffect(() => {
        const svg = d3.select(svgRef2.current);
        
        const xScale = d3
            .scaleBand()
            .domain(data.map((v, i) => i))
            .range([0, 300])
            .padding(0.5);
    
        const yScale = d3.scaleLinear().domain([0, 150]).range([150, 0]);
        
        const xAxis = d3.axisBottom(xScale).ticks(data.length);
        svg.select(".x-axis").style("transform", 
    "translateY(150px)").call(xAxis);
    
        const yAxis = d3.axisRight(yScale);
        svg.select(".y-axis").style("transform", 
    "translateX(280px)").call(yAxis);
    svg
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (v, i) => xScale(i))
        .attr("y", yScale)
        .attr("width", xScale.bandwidth())
        .attr("height", (v, i) => 150 - yScale(v));
    }, [data]);
    return (
        <>
            <svg ref={svgRef2} width={300} height={300}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
            </svg>
        </>
    );
}
export default Barchart;