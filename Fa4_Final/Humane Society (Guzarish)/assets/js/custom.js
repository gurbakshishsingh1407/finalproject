// Creating animation on selected  elements when they are visible on screen  !

const counters = document.querySelectorAll('.counter');
const counterGrid = document.getElementById('cG');
const speed = 50;

let threshold = 600; // in px
let elements = document.querySelectorAll('.item'); // select all chosen elements
let animateClass = "pop"; //Adding animation class

let position_threshold = 600; // in px
let position_elements = document.querySelectorAll('.position'); // select all chosen elements
let position_animateClass = "setPosition"; //Adding animation class

let counter_threshold = 600; // in px
let counter_elements = document.querySelectorAll('.counts'); // select all chosen elements
let counter_animateClass = "setCounter"; //Adding animation class


//Donation Seators Animation
$(document).ready(function () {
  $(document).on('scroll', function() {

    const scrolledHeight = window.scrollY;

    // Animates for defined elements

    elements.forEach(element => {

      const  element_offset = $(element).offset().top - threshold;

      if (scrolledHeight > element_offset) {

        if ($(element).hasClass(animateClass)) {
          
        } else {
          $(element).addClass(animateClass);
        }
      }
    });

// About us Transition
    position_elements.forEach(element => {

      const  element_offset = $(element).offset().top - threshold;

      if (scrolledHeight > element_offset) {

        if ($(element).hasClass(position_animateClass)) {
          
        } else {
          $(element).addClass(position_animateClass);
        }
      }
    });


// Counter transition
    counter_elements.forEach(element => {

      const  element_offset = $(element).offset().top - threshold;

      if (scrolledHeight > element_offset) {

        if ($(element).hasClass(counter_animateClass)) {
          
        } else {
          $(element).addClass(counter_animateClass);

          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;

              // Lower inc to slow and higher to slow
              const inc = Math.ceil(target / speed);

              // console.log(inc);
              // console.log(count);

              // Check if target is reached
              if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });
        }
      }
    });


  });
});


// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Help", "Better Life", "Shelter"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});