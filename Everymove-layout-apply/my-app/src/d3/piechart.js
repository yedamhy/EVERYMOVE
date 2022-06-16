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
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}

export default PieChart;
