var arrStation = []; //배열 선언
var obj;
var jsonData;

$(document).ready(function () {
  $("#sdata").click(function () {
    $.ajax({
      url: "http://3.138.153.244:3001",
      type: "GET",
      data: { stations: arrStation },
      success: function (data) {
        console.log("컨트롤러에서 받은 MSG : " + data);
        jsonData = JSON.parse(data);
        console.log(jsonData);
        alert(jsonData);
      },
      error: function (msg, error) {
        alert(error);
      },
    });
  });

  $("#seoulSubwayMap")[0].addEventListener("load", function () {
    obj = svgPanZoom("#seoulSubwayMap");

    obj.zoomAtPointBy(0, { x: $("#mainViewContainer").width() / 2, y: 0 });

    var svgDoc = $("#seoulSubwayMap")[0].getSVGDocument();
    var isClick = 1; //클릭이 되어있는지 확인 flag

    svgDoc.onmousemove = function (evt) {
      var clickedElement = evt.target;

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
      var clickedElement = evt.target;

      if ($(clickedElement).is("text") || $(clickedElement).is("tspan")) {
        if (arrStation.indexOf($(clickedElement).text()) === -1) {
          //현재 클릭된 역이 array에 없다면,
          clickedElement.style.fontSize = "30px";
          arrStation.push($(clickedElement).text()); //array에 push
          console.log(arrStation);
          console.log("push");
        } else {
          //현재 클릭된 역이 array에 존재 한다면,
          clickedElement.style.fontSize = "20px";
          arrStation.splice(arrStation.indexOf($(clickedElement).text()), 1); //array에서 remove
          console.log(arrStation);
          console.log("pop");
        }
      }
    };
  });
});
