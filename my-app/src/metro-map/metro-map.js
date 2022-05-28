import React from "react";
import { useState } from "react";
import SubwayLineMap from "./Seoul_subway_linemap_ko.svg";
import $ from "jquery";
import svgPanZoom from "svg-pan-zoom";

class MetroMap extends React.Component {
  constructor({ childToParent }) {
    super();

    let station;
    let obj;
    $(document).ready(function () {
      $("#seoulSubwayMap")[0].addEventListener("load", function () {
        console.log(document);
        obj = svgPanZoom("#seoulSubwayMap");
        obj.setZoomScaleSensitivity(1);
        let svgDoc = $("#seoulSubwayMap")[0].getSVGDocument();

        svgDoc.onmousemove = function (evt) {
          let clickedElement = evt.target;

          $(svgDoc).find("text").attr("font-size", "20px");
          $(svgDoc).find("tspan").attr("font-size", "20px");
          if ($(clickedElement).is("text") || $(clickedElement).is("tspan")) {
            if ($(clickedElement).parent().attr("id") != "legend_x5F_ko") {
              $(clickedElement).css("cursor", "pointer");
              $(clickedElement).attr("font-size", "30px");

              if ($(clickedElement).is("tspan")) {
                $(clickedElement).siblings().css("cursor", "pointer");
                $(clickedElement).siblings().attr("font-size", "30px");
              }
            }
          }
        };

        svgDoc.onclick = function (evt) {
          let clickedElement = evt.target;
          if ($(clickedElement).is("text") || $(clickedElement).is("tspan")) {
            clickedElement.style.fontSize = "30px";
            station = $(clickedElement).text();
            childToParent(station);
            console.log("click", clickedElement, svgDoc);
          }
        };
      });
    });
  }

  render() {
    return (
      <div>
        <title>Page Title</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        html,\n        body {\n\n            width: 100%;\n            height: 100%;\n            padding: 0;\n            margin: 0;\n            overflow: hidden;\n\n        }\n\n        #mainViewContainer {\n            height: 100vh;\n            width: 100vh;\n            border: 1px solid black;\n            margin: 10px;\n            padding: 3px;\n            overflow: hidden;\n        }\n\n        #seoulSubwayMap {\n            width: 95%;\n            height: 95%;\n            min-height: 100%;\n            display: inline;\n        }\n\n        .thumbViewClass {\n            border: 1px solid black;\n            position: absolute;\n            top: 5px;\n            left: 5px;\n            width: 10%;\n            height: 20%;\n            margin: 3px;\n            padding: 3px;\n            overflow: hidden;\n        }\n\n        #thumbView {\n            z-index: 110;\n            background: white;\n        }\n\n        #scopeContainer {\n            z-index: 120;\n        }\n\n        .black_overlay {\n            display: none;\n            position: absolute;\n            top: 0%;\n            left: 0%;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            z-index: 1001;\n            -moz-opacity: 0.8;\n            opacity: .80;\n            filter: alpha(opacity=80);\n        }\n\n        .white_content {\n            display: none;\n            position: absolute;\n            top: 25%;\n            left: 25%;\n            width: 50%;\n            height: 50%;\n            padding: 16px;\n            border: 16px solid orange;\n            background-color: white;\n            z-index: 1002;\n            overflow: auto;\n        }\n    ",
          }}
        />
        <embed
          id="seoulSubwayMap"
          type="image/svg+xml"
          src={SubwayLineMap}
          width="100%"
        />
      </div>
    );
  }
}

export default MetroMap;
