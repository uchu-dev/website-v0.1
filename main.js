// THANKS FOR CHECKING OUT THE CODE. SHARE ADVICE OR GET IN TOUCH ANYTIME BELOW:
// https://calendly.com/dev-friends/30-minute-chat?month=2021-03


// store the date we'll count down to (release date)
let count = new Date('jun 16, 2021 00:00:00').getTime();


// update count down every second
var x = setInterval(function() {

    // current time + time till release
    var now = new Date().getTime();
    var diff = count - now;

    // time calc for days, hours, minutes, seconds
    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((diff % (1000*60)) / 1000);
    
    // outputresult in element (id="jsResult")
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // countdown over display text + hide count
    if (diff <= 0) {
        clearInterval(x);
        document.getElementById("status").innerHTML= "We are officially a company!";
        document.getElementById("count").style.display="none";
    }
}, 1000);