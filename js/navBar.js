$(document).ready(function() { 
  document.getElementById("form").style.display = 'none';
  var $message = $('#message'); //initializing variables y setting up references
  var $tasks = $('#tasks');
  var $background = $('#background');
  var $about = $('#about');

  $('.navList a').on('click', function() { /gets called everytime the user clicks the navBar
    
    if($(this).attr('id') === 'message') { //checks to see which button was chosen and
      message();                            //calls a specific function
    } else if ($(this).attr('id') === 'tasks') {
      tasks();
    } else if ($(this).attr('id') === 'background') {
      background();
    } else {
      about();
    }

    function message() {


    }

    function tasks() {

    }

    function background() {
      document.getElementById("form").style.display = '';
    }

    function about() {

    }

  });

});