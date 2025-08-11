const clock=document.getElementById('clock')

setInterval(function(){
    let date=new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
},1000)