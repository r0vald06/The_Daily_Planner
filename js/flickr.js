$(document).ready(function() { // waits for the javascript to load first
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var counter = 0;

  $('form').submit(function (event) {
    document.getElementById("photos").style.display = '';
    document.getElementById("clockContainer").style.display = 'none';

     var $submitButton = $('#submit'); //when the user hits enter rather hitting search button
     var $searchField = $('#search');

     
     event.preventDefault(); //stops the page from refreshing itself
     
     $searchField.prop("disabled",true); //checking to see if the user as searched anything
     $submitButton.attr("disabled", true).val("searching...."); //updating serch button text
     
     $('#photos').attr("class","imgContainer");
     var search = $searchField.val();

     $.getJSON(flickerAPI, {
         tags: search,
         format: "json"
       },
     function(data){     
       if (data.items.length > 0) {
         $.each(data.items,function(i,photo) {
           var photoHTML = '';
           counter += 1;
           photoHTML += '<img class="imgCube"src="' + photo.media.m + '"></a>';
           var id = '#flickr' + counter.toString();
           $(id).html(photoHTML);
         }); // end each
       } else {
         photoHTML = "<p>No photos found that match: " + animal + ".</p>"
       }
       
       counter = 0;
       $searchField.prop("disabled", false);
       $submitButton.attr("disabled", false).val("Search");
     }); // end getJSON
 
   }); // end click
 
//    document.getElementsByClassName('image').addEventListener("click",updateBackground);
  
//  function updateBackground() {  
//     var $bodyTag = $('.body');
//     $bodyTag.attr('background','https://farm6.staticflickr.com/5164/5255993180_0406a92a28_m.jpg');
//     console.log('its hapenning');

//   };

 }); // end ready