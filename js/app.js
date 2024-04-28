$('.menu-bar-mobile').slicknav({
    duration: 500,
    prependTo:'.mobilemenu'
});

$(document).ready(function(){
  // For colorbox 
  // $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  $(".youtube").colorbox({iframe:true, innerWidth:680, innerHeight:382});
  //media query for colorbox video.
  if($(window).width() < 1024){
  $(".youtube").colorbox({iframe:true, innerWidth:500, innerHeight:300});
  }
  if($(window).width() < 767){
  $(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:250});
  }
  // matchHeight 
  $('.container-fluid .box').matchHeight();
  $('.container .services-card').matchHeight();
  $('.gallary-section .galary-img').matchHeight();
});

$('#aboutUs').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

$('#gallary-car').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
//   autoWidth:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}



