import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = (props) => {
  const ref = useRef(null);
  const cache = useRef(props.dataset);
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(["##8a89a6", "#a05d56"]);
  const format = d3.format(",");

  useEffect(() => {
    const data = createPie(props.dataset);
    const prevData = createPie(cache.current);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    const arcTween = (d, i) => {
      const interpolator = d3.interpolate(prevData[i], d);

      return (t) => createArc(interpolator(t));
    };

    path
      .attr("class", "arc")
      .attr("fill", (d, i) => colors(i))
      .transition()
      .attrTween("d", arcTween);

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("fill", "white")
      .style("font-size", 10)
      .transition()
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .tween("text", (d, i, nodes) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return (t) => d3.select(nodes[i]).text(format(interpolator(t).value));
      });

    cache.current = props.dataset;
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};

export default PieChart;

/*function PieChart({temp}) {
  const[dataset, setDataset] = useState([]);
  const svgRef2 = useRef();

  useEffect(() =>  {
    //console.log({temp});
    psgr.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        //console.log(data[i].station);
        if(data[i].station === temp.station){
          let tempPassenger = data[i].passenger;
          let tempDisabled = data[i].disabled;
          setDataset([tempPassenger, tempDisabled]); 
        }
        }});
        console.log([setDataset]);
  });



 /* const width = 500;
  const height = 500;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 9, b: 20, c:30, d:8, e:12}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#8a89a6", "#a05d56"]);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; });
var data_ready = pie(d3.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  /*let numbers = Object.values({ temp }).map((e, index) => {
    return console.log(e, index); // 이용객 수 받아오기
  });
*/
  /*const state = {
    labels,
    datasets: [
      {
        data: numbers, //데이터
        backgroundColor: ["#F54EA2", "#41b6e6"], //컬러지정
        hoverBackgroundColor: ["#b9006e", "#005792"], //hover 컬러 지정
      },
    ],
  };*/

  /*return (
    <div>
      <Pie data={state} />
    </div>
  );*/

//}
//export default PieChart;

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
