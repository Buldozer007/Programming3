var seasons = ["Winter", "Spring", "Summer", "Fall"];
//setInterval(seasons , 1000);
function changeSeason() {
    for (var i in seasons) {
        for (var x; x < seasons.length; x++) {
            console.log(seasons[i]);
        }
    }
}
setInterval(changeSeason, 1000);