import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function PieChart({ pieData }) {
  // let getValues = Object.values({ data }).map((e, index) => {
  //   return console.log(e, index);
  // });
  console.log(pieData);
  let values = Object.values(pieData);
  console.log("A", Object.values(pieData));
  // const data = {
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: values, //data들어가는 자리 즉 getValues를 넣으면 됨.
  //       backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)"],
  //       hoverBackgroundColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(255, 99, 132, 1)",
  //       ],
  //       borderWidth: 3,
  //     },
  //   ],
  // };
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["일반 이용객 수", "장애인 이용객 수"],
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: [
         "#ffff80", "#4E5206",
          
        ],
        borderColor: [
     
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return <><Doughnut data={data} />
  <h6>  »&emsp;일반인 이용객 수 대비 장애인 이용객 수</h6></>;
}

export default PieChart;
