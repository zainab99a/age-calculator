 // add event listener to html element when i click on this element this function is excutied
 document.getElementById("submit").addEventListener("click",function(){
    //get value of input element and format it to date
var myDate = new Date(document.getElementById("date").value),
//converts the Date into milliseconds
milli = myDate.getTime(),
//Current Date into Milliseconds
newDate = new Date()
newMilli = newDate.getTime();   
//The difference is first divided by 1000 to convert milliseconds to seconds.
//divided by 60 to convert seconds to minutes, by 60 again to convert minutes to hours
//by 24 to convert hours to days, by 30 to approximate months, and finally by 12 to convert months to years
document.getElementById("result").innerHTML = Math.floor((newMilli - milli) / 1000 / 60 / 60 / 24 / 30 / 12);    });
             