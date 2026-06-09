const displayTime = document.querySelector("#time-display");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let startTime =0;
let currentTime =0;
let elapsedTime = 0;
let intervalId;
let min=0;
let secs=0;
let hrs = 0;
let paused = true;

startBtn.addEventListener("click", ()=>{
    if(paused){
        paused=false;
        startTime = Date.now()-elapsedTime;
    }
})
pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused=true;
        elapsedTime = Date.now()-startTime;
        clearInterval(intervalId);
    }
})
resetBtn.addEventListener("click", ()=>{
    startTime =0;
    currentTime =0;
    intervalId;
    min=0;
    elapsedTime = 0;
    secs=0;
    hrs = 0;
    paused = true;
    clearInterval(intervalId);
    displayTime.textContent = "00:00:00";
})

function updateTime(){
    hrs =  
    displayTime.textContent = `${hrs}: ${mins}:${secs}`
}