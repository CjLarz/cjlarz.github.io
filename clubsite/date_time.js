// JavaScript source code
runClock();
setInterval("runClock()", 1000);

function runClock()
{
    var today = new Date();
    var dateStr = today.toLocaleDateString();
    var timeStr = today.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML =
        dateStr + "<br />" + timeStr;

    /* Calculate the days until date */
    var compDate = new Date("February 24, 2018");
    var y = today.getFullYear();
    compDate.setFullYear(y);
    var daysLeft = (compDate - today) / (1000 * 60 * 60 * 24);

    /* Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /* Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

// output

    /* Display the time left until date */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);

}