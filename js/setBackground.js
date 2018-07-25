$(document).ready(function() { // waits for the javascript to load first

  $('.flickr1').click(function(image) {  
    var $bodyTag = $('.body');
    $bodyTag.attr('background','https://farm6.staticflickr.com/5164/5255993180_0406a92a28_m.jpg');
    console.log('its hapenning');

  });

 }); // end ready