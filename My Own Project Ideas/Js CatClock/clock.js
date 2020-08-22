GetTime=()=> {
    let date=new Date()
    let hours,minutes,seconds;
    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    
    let time=`${hours}:${minutes}:${seconds}`;
    
    


    document.getElementById("clock").innerText=time;
    document.getElementById("clock").textContent=time;







    setTimeout(GetTime,1000)
    
    }


    

    GetTime();

   
    