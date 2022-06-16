import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Pie1({station}){
    const svgDimensions = {
        width: 300,
        height: 300,
      };
      const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;
      const data = [420, 80, 130, 210, 510, 80];

      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", svgDimensions.width)
        .attr("height", svgDimensions.height)
        .style("border", "1px solid rgba(0,0,0,0.1)");

      const g = svg
        .append("g")
        .attr(
          "transform",
          `translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`
        );
      const color = d3.scaleOrdinal([
        "#ff9800",
        "#ffa726",
        "#ffb74d",
        "#ffcc80",
        "#ffe0b2",
        "#fff3e0",
      ]);
}   

export default Pie1;