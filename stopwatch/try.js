window.onload = function () {

var second = 00;
var minute=00;
var ten = 00;
var minutes = document.getElementById('minute');
var seconds = document.getElementById('second');
var tens = document.getElementById('ten');
var starts = document.getElementById('start');
var stops = document.getElementById('stop');
var resets = document.getElementById('reset');
var Interval;

starts.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
}

stops.onclick = function(){
    clearInterval(Interval);   
}

resets.onclick = function(){
    clearInterval(Interval);
    ten="00";
    second="00";
    seconds.innerHTML=second;
    tens.innerHTML=ten;    
}

function startTimer(){
    ten++;

    if(ten<=9){
        tens.innerHTML="0"+ten;
    }

    if(ten>9){
        tens.innerHTML = ten;
    }
    if(ten>99){
        second ++;
        seconds.innerHTML = "0"+second;
        ten = 0;
    }
    if(second>9){
        seconds.innerHTML=second
    }
    if(second>59){
        minute++;
        minutes.innerHTML="0"+minute;
        second=0;
    }
    if(minute>9){
        minutes.innerHTML=minute;
    }

}
}




// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var Tens = document.getElementById("tens")
//     var Seconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval  ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//         tens = "00";
//         seconds = "00";
//         Tens.innerHTML = tens;
//         Seconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         Tens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         Tens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {  
//         // console.log("seconds");
//         seconds++;
//         Seconds.innerHTML = "0" + seconds;
//         tens = 0;
//         // Tens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         Seconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }