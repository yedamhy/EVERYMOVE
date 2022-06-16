import BarChart from "./components/BarChart";
import "./Top5.css";

function Top5({ childToParent }) {
  return (
    <div className="App">
      <div className="graph-container">
        <BarChart
          width={900}
          height={250}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          data={[
            { xAxisValue: "청량리", yAxisValue: 54022 },
            { xAxisValue: "서울역", yAxisValue: 52737 },
            { xAxisValue: "창동역", yAxisValue: 44472 },
            { xAxisValue: "까치산", yAxisValue: 39266 },
            { xAxisValue: "사당역", yAxisValue: 39266 },
            { xAxisValue: "가산디지털단지", yAxisValue: 33406 },
          ]}
          childToParent={childToParent}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default Top5;
