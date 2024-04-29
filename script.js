let words =document.querySelectorAll(".word");
words .forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent ="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent =letter;
        span.className ="letter";
        word.append(span);
    });
    
});

let currentWordIndex =0;
let maxWordIndex = words.length -1;

words[currentWordIndex].style.opacity ="1";

let changeText =()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className ="letter out";
        },i*80);
    });

    nextWord.style.opacity ="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className ="letter behind";
        setTimeout(()=>{
            letter.className ="letter in";

        },340+i*80);
    });
currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}
 changeText();
 setInterval(changeText, 3000)





 //circle skill//

 const circles = document.querySelectorAll('.circle');
 circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360/dots;


    for (let i = 0; i < dots; i++) {
        
        points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
        
    }

    elem.innerHTML = points;
        const pointsMarked =elem.querySelectorAll('.points');

        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
            
        }
 })


 //mixed it up in protfolio section

 var mixer = mixitup('.portfolio-gallery');

 //active menu

// JavaScript file to handle active menu item based on scroll position
// Selecting menu items and sections
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

// Function to set active menu item
function setActiveMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {} // Finding the section in view
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