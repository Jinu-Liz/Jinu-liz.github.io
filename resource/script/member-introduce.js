const sliderInner = document.querySelector(".slider__inner");
const slider = document.querySelectorAll(".slider");

let currentIndex = 0;

sliderInner.style.transition = "all 1.6s";
setInterval(()=>{
  currentIndex  = (currentIndex + 1 )% slider.length;

  sliderInner.style.transform = "translateX("+ -800 * currentIndex +"px)";
},2000);