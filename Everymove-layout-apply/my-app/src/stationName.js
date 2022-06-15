import React from "react";
import './stationName.css'

function StationName({station}){
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap" rel="stylesheet"/>
            <div className="stationName">{station}</div>
        </div>
        

    )
}
export default StationName;