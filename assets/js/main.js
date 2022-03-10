$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    setGallerySize: false
    
  });

  $('.home-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    setGallerySize: false
  });

// (function () {
//     var elem = document.querySelector('.main-carousel');
//     var flkty = new Flickity(elem, {
//         // options
//         cellAlign: 'left',
//         contain: true
//     });
//     console.log("on");
// })();




$(function () {
    x = 2;
    $('#work .container-fluid').slice(0, 2).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        x = x + 3;
        $('#work .container-fluid').slice(0, x).slideDown();
    });
});






$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("bg-light");
        $(".navbar").removeClass("nav-custom");
        $(".nav-link").addClass("nav-link-dark");
        $(".navbar-brand img").removeClass("logo-non-sticky");
        $('.navbar-brand img').addClass("logo-sticky");
       

    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("bg-light");
        $(".navbar").addClass("nav-custom");
        $(".nav-link").removeClass("nav-link-dark");
        $('.navbar-brand img').removeClass("logo-sticky")
        $('.navbar-brand img').addClass("logo-non-sticky");
    }
});

$(".mega-drop-down,.mega-menu").hover(
    function () {

      $(".nav-custom").addClass('nav-custom-active');
      $(".nav-custom .nav-link").addClass('nav-link-active');
     
    }, 
    function () {
        
      $(".nav-custom").removeClass('nav-custom-active');
      $(".nav-custom .nav-link").removeClass('nav-link-active');
    }
    );




