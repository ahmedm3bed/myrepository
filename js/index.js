
$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
   
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        center: true,
        nav:true,
        loop:true,
        responsive: {
          600: {
            items: 4
          }
        }   
   
    });
   
  });

 let divsidelandings= document.querySelectorAll(".divsidelanding")
 let counter=0;
 function rotateDivs() {
  counter = (counter + 1) % divsidelandings.length;

  for (let i = 0; i < divsidelandings.length; i++) {
    const div = divsidelandings[i];
    div.style.transitionDuration = i === counter ? "0.5s" : "";
    div.classList.toggle("displayOpacity", i === counter);
    div.classList.toggle("hideOpacity", i !== counter);
  }
}
 setInterval(rotateDivs,2300)



 let contactusicon=document.querySelector(".contactusicons button")
let opened=0;
 contactusicon.onclick=function(){

  document.querySelector(".subcontact").classList.toggle('translate0');

 }