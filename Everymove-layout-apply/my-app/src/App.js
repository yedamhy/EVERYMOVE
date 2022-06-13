import React from "react";
import { useState, useEffect } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import MetroMap from "./metro-map/metro-map";
import { Graph1, Graph2, StationInfo, MetroMapCon, Hide, Map, SideBar, Main,Container } from "./Wrapper";
import address from "./address";
import Header from './header.js';
import Btn from "./btn.js";
import Temp from "./d3/Temp.js";
import passengers from "./graph/passenger_2021";


let searchAddressToCoordinate;
let navermaps;

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
  const [station, setStation] = useState("");
  const[visible, setVisible] = useState(false);
  const [temp, setTemp] = useState({});
  
  const childToParent = (childData) => {
    searchAddressToCoordinate(address[childData]);
    if (passengers[childData] !== undefined) setTemp(passengers[childData]);
  
  };
  return (
    <>
      <Container>
      
      <Header/>
      <SideBar>
      </SideBar>
      
      <Main>
        
        
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
        <Hide/>
        <Graph1/>
        <Graph2/>
        <StationInfo/>
        </Main>
        <Btn/>
      </Container>
      
    </>
  );
}

export default App;
