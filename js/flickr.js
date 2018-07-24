$(document).ready(function() { // waits for the javascript to load first
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 
  $('form').submit(function (event) {
     var $submitButton = $('#submit'); //when the user hits enter rather hitting search button
     var $searchField = $('#search');
     
     event.preventDefault(); //stops the page from refreshing itself
     
     $searchField.prop("disabled",true); //checking to see if the user as searched anything
     $submitButton.attr("disabled", true).val("searching...."); //updating serch button text
    
     var search = $searchField.val();
     $('#photos').html('');
     $.getJSON(flickerAPI, {
         tags: search,
         format: "json"
       },
     function(data){
       var photoHTML = '';
       if (data.items.length > 0) {
         $.each(data.items,function(i,photo) {
          //  photoHTML += '<div>';
           photoHTML += '<a href="' + photo.link + '" class="image">';
           photoHTML += '<img class="imgCube"src="' + photo.media.m + '"></a></div>';
         }); // end each
       } else {
         photoHTML = "<p>No photos found that match: " + animal + ".</p>"
       }
       $('#photos').html(photoHTML);
       $searchField.prop("disabled", false);
       $submitButton.attr("disabled", false).val("Search");
     }); // end getJSON
 
   }); // end click
 
 }); // end ready