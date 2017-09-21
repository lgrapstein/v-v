$(document).ready(function() {
  $("#arrow-button").click(function() {
    $('html, body').animate({
      scrollTop: $('.nav-div').offset().top
    }, 2000);
  })
})

var $navBar = $('.nav-div');
var navPos = $navBar.offset().top;

$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
        $navBar.addClass('sticky');
    } else {
        $navBar.removeClass('sticky');
    }
});
