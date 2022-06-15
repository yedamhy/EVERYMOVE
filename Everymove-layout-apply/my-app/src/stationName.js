import React from "react";
import './stationName.css'

function StationName({station}){
    return (
        <div>
            <div className="stationName">{station}</div>
        </div>
        

    )
}
export default StationName;