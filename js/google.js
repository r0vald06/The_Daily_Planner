// $(document).ready(function() { // waits for the javascript to load first
//   var flickerAPI = "https://www.google.com/images?";
//   var key = "AIzaSyCIOFzA_d0PbeMfhH7wfsC3JlV7qGV7tiw";
//   var apiID ="017677986557152560211:k_ch2ihfbaq";
//   var imgsz = "xxlarge";
//   var as_filetype = "jpg";
//   var imgtype = "photo";
//   var client = "google-csbe";
//   var searchtype = "image";
//   var counter = 0;

//   $('form').submit(function (event) {
//      var $submitButton = $('#submit'); //when the user hits enter rather hitting search button
//      var $searchField = $('#search');
     
//      event.preventDefault(); //stops the page from refreshing itself
     
//      $searchField.prop("disabled",true); //checking to see if the user as searched anything
//      $submitButton.attr("disabled", true).val("searching...."); //updating serch button text
     
//      $('#photos').attr("class","imgContainer");
//      var search = $searchField.val();
//     // $('#photos').html('');
//      $.getJSON(flickerAPI, {
//          key: key,
//          cx: apiID,         
//          as_filetype: as_filetype,
//          imgsz: imgsz,
//          imgtype: imgtype,
//          client: client,
//          searchtype: searchtype,
//          q: search
//        },
//      function(data){       
//        console.log(data);
//        if (data.items.length > 0) {
//          $.each(data.items,function(i,photo) {
//            var photoHTML = '';
//            counter += 1;
//            photoHTML += '<img class="imgCube"src="' + photo.link + '"></a>';
//            console.log('/////////////////////');
//           console.log(photo.link);
//            console.log('/////////////////////');
//            var id = '#flickr' + counter.toString();
//            console.log(id);
//            $(id).html(photoHTML);
//          }); // end each
//        } else {
//          photoHTML = "<p>No photos found that match: " + animal + ".</p>"
//        }
       
//        $searchField.prop("disabled", false);
//        $submitButton.attr("disabled", false).val("Search");
//      }); // end getJSON
 
//    }); // end click
 
// //    document.getElementsByClassName('image').addEventListener("click",updateBackground);
  
// //  function updateBackground() {  
// //     var $bodyTag = $('.body');
// //     $bodyTag.attr('background','https://farm6.staticflickr.com/5164/5255993180_0406a92a28_m.jpg');
// //     console.log('its hapenning');

// //   };

//  }); // end ready