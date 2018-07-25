$(document).ready(function() { // waits for the javascript to load first

  (function () {

    var clockElement = document.getElementById( "clock" );
  
    function updateClock ( clockElement ) {  
      var originalTime = new Date().toLocaleTimeString(); //keeping my original time
     
      var firstReference = originalTime.lastIndexOf(':'); //getting refernce points
      var secondReference = originalTime.lastIndexOf('M'); // to cut the string and take away the milliseconds 
      var time = originalTime.slice(0, firstReference);

      time = time + originalTime.slice(firstReference + 3, secondReference + 1);
      
      clockElement.innerHTML = time; //setting the new time without milliseconds
    }
  
    setInterval(function () { //calling the function every seconds
        updateClock( clockElement ); //to keep the clock updated
    }, 1000);
  
  }());

 }); // end ready





