const clockTime=document.querySelector("#clockTime");
const clockDate=document.querySelector("#clockDate");

function getClock(){
    const date=new Date();
    
    const year = date.getUTCFullYear();
    const month = String(date.getMonth()+1).padStart(2,"0");
    const nowdate = String(date.getDate()).padStart(2,"0");
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clockTime.innerText = `${hours}:${minutes}:${seconds}`;
    clockDate.innerText= `${year} ${month} / ${nowdate}`;
}

getClock()
setInterval(getClock,1000);