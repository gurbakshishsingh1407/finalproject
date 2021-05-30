
$(document).ready(function () {
  $('.hero').css('background-image', 'linear-gradient(rgba(129,82,2 , 0.5) , rgba(129,82,2 ,0.2)) , url("assets/images/main.jpg")')
});


 let  nav , Pagebody , MobileHeader , MobileFooter , Modal , navBar;
    
    nav = document.querySelector('.mobile-nav > nav')
    Pagebody = document.querySelector('.Pagebody')
    MobileHeader = document.querySelector('.mobile-nav > header')
    MobileFooter = document.querySelector('.footer');
    Modal = document.querySelector('.modal');
    navBar = document.querySelector('.navBar');
    
    
    function triggerMenu() {
    $(Pagebody).addClass("__open");
    $(MobileHeader).addClass('__open');
    $(MobileFooter).addClass('__open');
    $(Modal).addClass("__fadeIn");
    $(nav).addClass("__transform");
    }
    
    function close_modal() {
    $(Pagebody).removeClass("__open");
    $(MobileHeader).removeClass('__open');
    $(MobileFooter).removeClass('__open');
    $(Modal).removeClass("__fadeIn");
    $(nav).removeClass("__transform");
    }
$(document).on('scroll', function() {
  $('.scrollTop').css('transform', 'scale(1)');
})
var isScrolling;
// Listen for scroll events
window.addEventListener('scroll', function (event) {
  window.clearTimeout(isScrolling);

  if (window.scrollY < 700) {
    isScrolling = setTimeout(function() {
      $('.scrollTop').css('transform', 'scale(0)');
    }, 200);

  } else {
    isScrolling = setTimeout(function() {
      $('.scrollTop').css('transform', 'scale(0)');
    }, 1000);
  }
}, false);

function href(link) {
  window.location.href = link;
}

function scrollMeTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}