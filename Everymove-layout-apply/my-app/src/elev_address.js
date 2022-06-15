import { useState, useEffect, useRef } from "react";
import elevAddress from "./metro-map/seoul_metro_elevators.csv";
import { csv } from "d3-fetch";
import { NaverMap, Marker } from "react-naver-maps";

csv(elevAddress)
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      //console.log(data);
      if (data[i].station === "서울") {
        console.log(data[i]);
      }
    }
  })
  .catch(function (error) {
    if (error) throw error;
  });

function ElevAddress() {
  return <>{console.log("")}</>;
}

export default ElevAddress;
