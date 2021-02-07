import { now } from './utility.js'

const getClockTemplate = id => 
`<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`

setInterval(function() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let secondHandPosition = 270 + ((360 / 60) * seconds);
    let minuteHandPosition = 270 + ((360 / 60) * minutes) + (((360 / 60) / 60) * seconds);
    let hourHandPosition = 270 + ((360 / 12) * hour) + (((360 / 12) / 60) * minutes) + ((((360 / 12) / 60) / 60) * seconds);


    const startClock = () => {
        document.body.innerHTML = getClockTemplate(0);
        
        document.getElementById("clock-0-second-hand").style.transform = "rotate(" + secondHandPosition + "deg) translate(50%)";
        
        document.getElementById("clock-0-minute-hand").style.transform = "rotate(" + minuteHandPosition + "deg) translate(50%)";
        
        document.getElementById("clock-0-hour-hand").style.transform = "rotate(" + hourHandPosition + "deg) translate(50%)";
    }
    
    startClock()
}, 1000)