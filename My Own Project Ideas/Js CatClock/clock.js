GetTime=()=> {
    let date=new Date()
    let hours,minutes,seconds;
    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    
    let time=`${hours}:${minutes}:${seconds}`;
    
    document.getElementById("MyClockDisplay").innerText=time;
    document.getElementById("MyClockDisplay").textContent=time;

    setTimeout(GetTime,1000)
    
    }

    GetTime();

   
    