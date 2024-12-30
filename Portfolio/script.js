

// JavaScript file to animate text transition effect
// Selecting all elements with class 'word'
let words = document.querySelectorAll(".word");

// Splitting each word into letters and wrapping them in span elements
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

// Setting initial opacity for first word
words[currentWordIndex].style.opacity = "1";

// Function to change text with transition effect
let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Fading out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Fading in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    // Updating current word index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

// Initial call to change text
changeText();

// Setting interval to change text every 3 seconds
setInterval(changeText, 3000);






 //mixed it up in protfolio section

 var mixer = mixitup('.portfolio-gallery');

 //active menu

 let menuLi = document.querySelectorAll('header ul li a');
 let sections = document.querySelectorAll('section');
 
 // Function to set active menu item
 function setActiveMenu() {
     let len = sections.length;
     
     // Loop to find the current section in view
     while (--len && window.scrollY + window.innerHeight * 0.1 < sections[len].offsetTop) {}
     
     // Removing active class from all menu items
     menuLi.forEach(item => item.classList.remove("active"));
     
     // Adding active class to the corresponding menu item
     menuLi[len].classList.add("active");
 }
 
 // Initial call to set active menu item
 setActiveMenu();
 
 // Adding event listener for scroll to update active menu item
 window.addEventListener("scroll", setActiveMenu);
/*sticky navbar*/



// JavaScript file to make header sticky on scroll
// Selecting header element
const header = document.querySelector("header");
// Adding event listener for scroll
window.addEventListener("scroll", function () {
    // Toggling sticky class based on scroll position
    header.classList.toggle("sticky", window.scrollY > 50);
});








 /*swapper js*/

let swiperCards = new Swiper('.card-content', {

    loop: true,
    spaceBetween: 32,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    }
    
  });








  /*jQuary*/

  jQuery(document).ready(function($){
    // Ensure only the 6th image has the 'active' class initially
    $('.slider-img').removeClass('active');
    $('.slider-img').eq(5).addClass('active'); // eq(5) selects the 6th image (0-based index)

    $('.slider-img').on('click', function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    });
});










/*toggle*/
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

// Prevent closing the menu when clicking inside the menu itself
navlist.onclick = (event) => {
    event.stopPropagation();
}

// Close the menu when clicking outside of it
window.onclick = (event) => {
    if (!event.target.matches('#menu-icon')) {
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    }
}





ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2500,
    delay:400
});

ScrollReveal().reveal('.home-content h1',{delay:100,origin:'left'});
ScrollReveal().reveal('.chenge-text',{delay:100,origin:'left'});
ScrollReveal().reveal('.home-content p',{delay:100,origin:'left'});
ScrollReveal().reveal('.info-box',{delay:100,origin:'left'});
ScrollReveal().reveal('.home-content .btn-box',{delay:100,origin:'left'});
ScrollReveal().reveal('.social-icons',{delay:200,origin:'left'});
ScrollReveal().reveal('.home-image',{delay:100,origin:'right'});


ScrollReveal().reveal('.section-services',{interval:200,origin:'bottom'});

ScrollReveal().reveal('.main-text',{origin:'top'});

ScrollReveal().reveal('.new',{origin:'top'});

ScrollReveal().reveal('.img-about',{interval:100,origin:'bottom'});

ScrollReveal().reveal('.about-content h3 ',{interval:200,origin:'bottom'});
ScrollReveal().reveal('.about-content p  ',{interval:200,origin:'bottom'});
ScrollReveal().reveal(' .about-content .readmore ',{interval:200,origin:'bottom'});
ScrollReveal().reveal(' .about-content .btn',{interval:200,origin:'bottom'});

ScrollReveal().reveal('.hire-box',{interval:100,origin:'left'});
ScrollReveal().reveal('.hire-img',{interval:200,origin:'right'});

ScrollReveal().reveal('.skill-left h3',{interval:100,origin:'left'});
ScrollReveal().reveal('.skills_box',{interval:200,origin:'bottom'});

ScrollReveal().reveal('.skill-right',{interval:100,origin:'right'});
ScrollReveal().reveal('.professional',{interval:100,origin:'right'});


ScrollReveal().reveal('.filter-buttons',{interval:100,origin:'bottom'});
ScrollReveal().reveal('.portfolio-gallery',{interval:300,origin:'bottom'});

ScrollReveal().reveal('.cards-container',{interval:50,origin:'bottom'});


ScrollReveal().reveal('.name',{interval:100,origin:'left'});
ScrollReveal().reveal('.email',{interval:100,origin:'right'});
ScrollReveal().reveal('.number',{interval:100,origin:'left'});
ScrollReveal().reveal('.message',{interval:100,origin:'right'});
ScrollReveal().reveal('.btn-box formBtn button',{interval:100,origin:'left'});

