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
            htmlExprSower += "<div class=\"container\">";
            htmlExprSower += "<div class=\"profile-pic\"><img ";
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "src=\"" + data[i+3]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprSower += "src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
            }
            htmlExprSower += "<div class=\"text\">";
            htmlExprSower += "<h3 class=\"title\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                 htmlExprSower += data[i+1]["gs$cell"]["$t"];
            }
            if (data[i+1]["gs$cell"]["$t"] != "--" && data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSower += " with ";
            }
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSower += data[i+2]["gs$cell"]["$t"];
            }
            htmlExprSower += "</h3>";
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprSower += "<h4 class=\"content\">" + data[i+4]["gs$cell"]["$t"].replace('\n', '<br><br>') + "</h4>";
            }
            htmlExprSower += "</div>";
            htmlExprSower += "</div>";
        } else if (data[i]["gs$cell"]["$t"] == "Small Group") {
            htmlExprSg += "<div class=\"container\">";
            htmlExprSg += "<div class=\"profile-pic\"><img ";
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "src=\"" + data[i+3]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprSg += "src=\"assets/img/people.jpg\"></div>";
            }
            htmlExprSg += "<div class=\"text\">";
            htmlExprSg += "<h3 class=\"title\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                 htmlExprSg += data[i+1]["gs$cell"]["$t"];
            }
            if (data[i+1]["gs$cell"]["$t"] != "--" && data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSg += " with ";
            }
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprSg += data[i+2]["gs$cell"]["$t"];
            }
            htmlExprSg += "</h3>";
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprSg += "<h4 class=\"content\">" + data[i+4]["gs$cell"]["$t"].replace('\n', '<br><br>') + "</h4>";
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
