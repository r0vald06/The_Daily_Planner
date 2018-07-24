$(document).ready(function() { // waits for the javascript to load first

  (function () {

    var clockElement = document.getElementById( "clock" );
  
    function updateClock ( clock ) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }
  
    setInterval(function () {
        updateClock( clockElement );
    }, 1000);

    $('.clockContainer').html('<span id="clock"></span>');
  
  }());

 }); // end ready





