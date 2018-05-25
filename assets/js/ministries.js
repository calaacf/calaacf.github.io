var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExprSower = '';
    var htmlExprSg = '';

    //Loop through each news data row and format/display it.
    for (var i = 5; i < data.length; i+=5) {
        if (data[i]["gs$cell"]["$t"] == "SOWER") {
            htmlExprSower += "<div class=\"profile-area\">";
            htmlExprSower += "<div class=\"profile-pic\">";
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "<img src=\"" + data[i+3]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprSower += "<img src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
            }
            htmlExprSower += "<div class=\"profile-desc\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "<h1>" + data[i+1]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "<h2>" + data[i+2]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "<h3>" + data[i+4]["gs$cell"]["$t"].replace('\n', '<br><br>') + "</h3>";
            }
            htmlExprSower += "</div>";
            htmlExprSower += "</div>";
        } else if (data[i]["gs$cell"]["$t"] == "Small Group") {
            htmlExprSg += "<div class=\"profile-area\">";
            htmlExprSg += "<div class=\"profile-pic\">";
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "<img src=\"" + data[i+3]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprSg += "<img src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
            }
            htmlExprSg += "<div class=\"profile-desc\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "<h1>" + data[i+1]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "<h2>" + data[i+2]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "<h3>" + data[i+4]["gs$cell"]["$t"].replace('\n', '<br><br>') + "</h3>";
            }
            htmlExprSg += "</div>";
            htmlExprSg += "</div>";
        }
    }

    document.getElementById("sower").innerHTML += htmlExprSower;
    document.getElementById("sg").innerHTML += htmlExprSg;
}

$(document).ready(function () {
  readData();
});
