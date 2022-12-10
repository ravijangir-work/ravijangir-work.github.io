// Changing colour of the navbar on scroll

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nav-bar-style").css("background","blue");
        $(".nav-tabs a").css("color","blue");
        }
  
        else{
            
        }
    })
  })