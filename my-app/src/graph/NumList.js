import React from "react";
import input_data from "./passenger_2021.json";

function Subway({subway}) {

}

function NumList () {

    return(
        <>
        {input_data.map((subway, index) => (
        <Subway subway = {subway} key ={index}/>
    ))}
        </>
    )
}

export default NumList;