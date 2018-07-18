var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '';

    //Loop through each news data row and format/display it.
    for (var i = 6; i < data.length; i+=6) {
        htmlExpr += '<div class=\"announcements-container\">';
        htmlExpr += '<a href=\"mailto:' + data[i+1]["gs$cell"]["$t"] + '\"><div class=\"contact\">[Contact]</div></a>';
        htmlExpr += '<div class=\"headline\">' + data[i+2]["gs$cell"]["$t"] + '</div>';
        htmlExpr += '<div class=\"details\">' + data[i+3]["gs$cell"]["$t"] + '<br><br></div>';
        htmlExpr += '<div class=\"tail\"></div>';
        htmlExpr += '<img class=\"announcements-image\" src=\"' + data[i+4]["gs$cell"]["$t"].replace('open?id=', 'uc?id=').replace('edit', '')
          + '\" style=\"transform:rotate(' + (Math.random()*4-2) + 'deg) '
          + 'translateY(-1vw) '
          + 'translateX(' + (Math.random()*20-10) + 'vh)\">';
        htmlExpr += '</div>';
    }

    htmlExpr = htmlExpr.replace(/\n/g, '<br>');

    document.getElementById("announcements-area").innerHTML += htmlExpr;
}

$(document).ready(function () {
  readData();
});
