$(document).ready(function() { // waits for the javascript to load first

  $(document).on('click', '.imgCube', function() {  
    var $bodyTag = $('.body');    
    var srcValue = $(this).attr('src');
    console.log(srcValue);
    $bodyTag.attr('background', srcValue);    
  });

 }); // end ready