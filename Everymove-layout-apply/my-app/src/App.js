import React from "react";
import { useState, useEffect } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import MetroMap, {stationEcho} from "./metro-map/metro-map";
import {
  Graph1,
  Graph2,
  StationInfo,
  MetroMapCon,
  Hide,
  Map,
  SideBar,
  Main,
  Container,
} from "./Wrapper";
import StationName from "./stationName";
import address from "./address";
import Header from "./header.js";
import Btn from "./btn.js";
import Temp from "./d3/Temp.js";
import passengers from "./graph/passenger_2021";
import { color } from "d3";
import elevAddress from "./metro-map/seoul_metro_elevators.csv";
import { csv } from "d3-fetch";
import EveryLogo from "./EveryLogo.gif"
import PieChart from "./d3/piechart.js";
import Top5 from "./d3/Top5";

let searchAddressToCoordinate;
let navermaps;

const readCsv = async () => {
  let elevFile = await csv(elevAddress);
  return elevFile;
};
let elevFile = readCsv();
function NaverMapComponent({ props }) {
  //const id = this.props.itemData.id;
  navermaps = window.naver.maps;
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 0,
    lng: 0,
  });

  const [center, setCenter] = useState({
    lat: 37.554722,
    lng: 126.970833,
  });
  const [zoom, setZoom] = useState(10);
  searchAddressToCoordinate = (address) => {
    navermaps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === navermaps.Service.Status.ERROR) {
          if (!address) {
            return alert("Geocode Error, Please check address");
          }
          return alert("Geocode Error, address:" + address);
        }

        if (response.v2.meta.totalCount === 0) {
          return alert("No result.");
        }

        let item = response.v2.addresses[0];
        //console.log(lng, lat);
        setGeometricData({
          lng: item.x,
          lat: item.y,
        });
        setCenter({
          lng: item.x,
          lat: item.y,
        });
        setZoom(17);
      }
    );
  };
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: "100%",
        height: "100%",
      }}
      naverEventNames={["zoom_changed", "center_changed"]}
      center={center}
      onCenterChanged={(center) => setCenter(center)}
      zoom={zoom}
      onZoomChanged={(zoom) => setZoom(zoom)}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(lat, lng)}
        animation={2}
        onClick={() => {
          console.log("여기는 N서울타워입니다.");
        }}
      />
    </NaverMap>
  );
}


function App() {
  const [temp, setTemp] = useState({});
  const [elev, setElev] = useState([]);

  const childToParent = (childData) => {
    setElev([]);
    searchAddressToCoordinate(address[childData]);
    if (passengers[childData] !== undefined) setTemp(passengers[childData]);
    elevFile.then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].station === childData) {
          //console.log(data[i]);
          let tempData = data[i];
          setElev((elev) => [...elev, tempData]);
        }
      }
    });
  };
  return (
    <>
      <Container>
        <Header />
        <SideBar>
          <hr
            style={{
              position: "relative",
              top: "80%",
              height: "0.5px",
              border: "0px",
              backgroundColor: "white",
            }}
          />
          <p
            style={{
              position: "relative",
              top: "80%",
              left: "2%",
              fontSize: "10px",
              color: "white",
            }}
          >
            © 2022 EVERYMOVE
          </p>
        </SideBar>

        <Main>
          <StationName station = {stationEcho}/>
          <Map>
            <RenderAfterNavermapsLoaded
              ncpClientId={"iynt9ev5fu"}
              error={<p>Maps Load Error</p>}
              loading={<p>Maps Loading...</p>}
              submodules={["geocoder"]}
            >
              <NaverMapComponent />
            </RenderAfterNavermapsLoaded>
          </Map>
          <MetroMapCon>
            <MetroMap childToParent={childToParent} />
          </MetroMapCon>
          <Hide />
          <Graph1>
            <Top5/>
          </Graph1>
          {/* <PieChart /> */}
          <Graph2 ></Graph2>
          <StationInfo>
            <p>{elev.forEach((element) => console.log(element))}</p>
            <div
              style={{
                left: "2%",
                fontSize: "12px",
                lineHeight: "3px",
                fontFamily: 'Nanum Gothic Coding',
                fontWeight: "1px",
              }}
            >
              {elev.map((element) => {
                return (
                  <>
                    <div
                      style={{
                        borderBottom: "1px solid #6DB387",
                      }}
                    >
                      <p>{element.dnum}</p>
                      <p>{element.inout}</p>
                      <p>{element.floor}</p>
                      <p>{element.location}</p>
                      <p>{element.machine}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </StationInfo>
        </Main>
        <Btn />
      </Container>
    </>
  );
}

export default App;
