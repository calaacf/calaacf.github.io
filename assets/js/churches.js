var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '';
    var htmlExprSg = '';

    //Loop through each news data row and format/display it.
    for (var i = 4; i < data.length; i+=4) {
      htmlExpr += "<div class=\"church-block\">";
      htmlExpr += "<a href=\"" + data[i+1] + "\" target=\"_blank\">";
      htmlExpr += "<div class=\"church-img\"><img ";
      if (data[i+2]["gs$cell"]["$t"] != "--") {
        htmlExpr += "src=\"" + data[i+2]["gs$cell"]["$t"] + "\"></div>";
      } else {
        htmlExpr += "src=\"assets/img/people.jpg\"></div>";
      }
      htmlExpr += "<div class=\"church-text\">" + data[i+3]["gs$cell"]["$t"].replace('\n', '<br>') + "</div>";
      htmlExpr += "</a>";
      htmlExpr += "</div>";
    }
    document.getElementById("churches").innerHTML += htmlExpr;
}

$(document).ready(function () {
  readData();
});
