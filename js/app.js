$('.menu-bar-mobil').slicknav({
    duration: 500,
    prependTo:'.mobilemenu'
});
// For colorbox 
$(document).ready(function(){
//   $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  $('.container-fluid .box').matchHeight();
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







