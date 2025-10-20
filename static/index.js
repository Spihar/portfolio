function gotoresume(){
    window.location.href = "https://docs.google.com/document/d/1HqLiEXD5-BoRqMU3YsEz4bFEPLMzj7NAFO9SSkbqmHc/edit?usp=sharing";
}
function gotogit(){
    window.location.href = "https://github.com/Spihar";
}
function gotolinkedin(){
    window.location.href = "https://www.linkedin.com/in/harthik-reddy-nuvvuru-0167b1287/";
}
const slide1 = document.querySelectorAll("#card1 img");
const slide2 = document.querySelectorAll("#card2 img");
let slideIndex1 = 0;
let intervalId1 = null;
let slideIndex2 = 0;
let intervalId2 = null;
initializeSlides1();
initializeSlides2();

function initializeSlides1() {
    if(slide1.length>0) {
        slide1[slideIndex1].classList.add("displaySlide");
    intervalId1=setInterval(nextSlide1, 3000);
    }
       
    }
    

function showSlides1(index) {
    if(index >= slide1.length) {
        slideIndex1 = 0;
    }
    else if(index < 0) {
        slideIndex1 = slide1.length - 1;
    }
    else {
        slideIndex1 = index;
    }
    slide1.forEach(slide => {
        slide.classList.remove("displaySlide");
    }
    );
    slide1[slideIndex1].classList.add("displaySlide");
}

function nextSlide1() {
    slideIndex1++;
    showSlides1(slideIndex1);

}

function prevSlide1() {
    slideIndex1--;
    showSlides1(slideIndex1);

}



function initializeSlides2() {
    if(slide2.length>0) {
        slide2[slideIndex2].classList.add("displaySlide");
    intervalId2=setInterval(nextSlide2, 3000);
    }
       
    }
    

function showSlides2(index) {
    if(index >= slide2.length) {
        slideIndex2 = 0;
    }
    else if(index < 0) {
        slideIndex2 = slide2.length - 1;
    }
    else {
        slideIndex2 = index;
    }
    slide2.forEach(slide => {
        slide.classList.remove("displaySlide");
    }
    );
    slide2[slideIndex2].classList.add("displaySlide");
}

function nextSlide2() {
    slideIndex2++;
    showSlides2(slideIndex2);

}

function prevSlide2() {
    slideIndex2--;
    showSlides2(slideIndex2);

}
