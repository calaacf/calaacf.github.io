var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '';

    //Loop through each news data row and format/display it.
    for (var i = 6; i < data.length; i+=6) {
        htmlExpr += '<div class=\"text-area\">';
        htmlExpr += '<div class=\"headline\">' + data[i+2]["gs$cell"]["$t"] + '</div>';
        htmlExpr += '<div class=\"date\"><a href=\"mailto:' + data[i+1]["gs$cell"]["$t"] + '\">[Contact]</a></div>';
        htmlExpr += '<div class=\"detail\">' + data[i+3]["gs$cell"]["$t"] + '<br><br></div>';
        htmlExpr += '<img src=\"' + data[i+4]["gs$cell"]["$t"].replace('open?id=', 'uc?id=').replace('edit', '') + '\" class=\"photo\" id=\"photo1\" width=60%>';
        htmlExpr += '</div>';
    }

    htmlExpr = htmlExpr.replace(/\n/g, '<br>');

    document.getElementById("news-area").innerHTML += htmlExpr;
}

$(document).ready(function () {
  readData();
});
