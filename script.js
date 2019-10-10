// initializa variable
let showTime = document.querySelector("h1");
let todayDate;
let hours;
let minutes;
let seconds;

setInterval(() => {
    //setTime();
    displayTime();
    displayThing();
}, 1000);


// all helper functions
function checkHours(){
    if (hours === 10){
        return true;
    }else{
        return false;
    }
}
function checkFordisplay(){
    if(getHours() >= 10 && minutes >= 10 & seconds >= 10){
        return true;
    }
    return false;
}
function getHours(){
    let hours = todayDate.getHours();
    if(hours > 12 ){
        hours -= 12;
    }

    return hours;
}
function setTime(){
    todayDate =  new Date();
    hours = getHours();
    minutes = todayDate.getMinutes();
    seconds = todayDate.getSeconds();
}
function displayTime(){
    setTime();
    //if(checkHours()){
        showTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
   // }else{
    //    alert("Not Yet!");
    //}
    
}

function displayThing(){
    if(checkFordisplay()){
       document.getElementById("container").style.display = "block";
    }
}




