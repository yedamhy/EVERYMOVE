import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
function NaverMapComponent() {
  //const id = this.props.itemData.id;
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{ width: "100%", height: "100vh" }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={10}
    />
  );
}
function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"iynt9ev5fu"}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapComponent />
    </RenderAfterNavermapsLoaded>
  );
}
export default App;
