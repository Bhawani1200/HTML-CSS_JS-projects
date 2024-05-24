const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("Seconds");
const apmm1 = document.getElementById("apmm");
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let apmm = "AM";
    if ( h>12){
    
        h=h-12;
        apmm = "PM"
    }
 hourE1.innerText = h;
 minutesE1.innerText = m;
 secondsE1.innerText = s;
 apmm,(innerText = apmm);
 setTimeout(()=>
 {
    updateClock();
 })

}
updateClock();
