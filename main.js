// THANKS FOR CHECKING OUT THE CODE. SHARE ADVICE OR GET IN TOUCH ANYTIME BELOW:
// https://calendly.com/dev-friends/30-minute-chat?month=2021-03



// store the date we'll count down to (release date)
let countDownDate = new Date('July 1, 2021 00:00:00').getTime();


// update count down every second
var countDownFunction = setInterval(function() {

    // current date and time
    var now = new Date().getTime();

    // time left till release
    var distance = countDownDate - now;

    // time calculation for days, hours, minutes, seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 % 60)) / 1000);
    
    // outputresult in element (id="jsResult")
    document.getElementById("jsResult").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // display text if countdown is over
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("jsResult").innerHTML= "WE'RE LIVE!";
    }
}, 1000);