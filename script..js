function scrollToMonitor(){
    document.getElementById("monitor").scrollIntoView({behavior:"smooth"});
}

function getAQI(){
    const city=document.getElementById("cityInput").value;
    const aqiDisplay=document.getElementById("aqiValue");
    const status=document.getElementById("aqiStatus");

    if(city===""){
        alert("Please enter a city");
        return;
    }

    const randomAQI=Math.floor(Math.random()*400)+50;

    aqiDisplay.innerText=randomAQI;

    if(randomAQI<=50){
        status.innerText="Good 🟢";
        aqiDisplay.style.color="lightgreen";
    }
    else if(randomAQI<=100){
        status.innerText="Moderate 🟡";
        aqiDisplay.style.color="yellow";
    }
    else if(randomAQI<=200){
        status.innerText="Unhealthy for Sensitive Groups 🟠";
        aqiDisplay.style.color="orange";
    }
    else if(randomAQI<=300){
        status.innerText="Unhealthy 🔴";
        aqiDisplay.style.color="red";
    }
    else{
        status.innerText="Hazardous ⚫";
        aqiDisplay.style.color="purple";
    }
}