var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = "morning";
else if (hrs >= 12 && hrs <= 17)
    greet = "afternoon";
else if (hrs >= 17 && hrs <= 24)
    greet = "evening";

document.getElementById("day_time").innerHTML = greet; 