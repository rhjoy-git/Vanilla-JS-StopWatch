let min = 00;
let sec = 00;
let tens = 00;
let count = 0;
let appendMin = document.querySelector("#min")
let appendSec = document.querySelector("#sec")
let appendTens = document.querySelector("#tens")
let btnStart = document.querySelector("#btn-start")
let btnStop = document.querySelector("#btn-stop")
let btnReset = document.querySelector("#btn-reset")
let interval;


function timeStart(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    else if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        sec++;
        if(sec < 9)
        appendSec.innerHTML = "0" + sec;
        else if(sec > 9)
        appendSec.innerHTML = sec;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if(sec > 59){
        min++;
        if(min < 9){
            appendMin.innerHTML = "0" + min;
            sec = 0;
            appendSec.innerHTML = "0" + sec;
        }
        else if(min > 9){
            appendMin.innerHTML = min; 
            sec = 0;
            appendSec.innerHTML = "0" + sec;
        }
    }

}

btnStart.addEventListener("click", function(){
    count++;
    if(count == 1){
        interval = setInterval(timeStart, 10);
    }
})

btnStop.addEventListener("click", function(){
    clearInterval(interval)
    count = 0;
})

btnReset.addEventListener("click",function(){
    clearInterval(interval)
    count = 0;
    tens = "00";
    sec = "00";
    appendSec.innerHTML = sec;
    appendTens.innerHTML = tens;
})