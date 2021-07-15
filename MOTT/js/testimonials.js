var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control5');
var control2 = document.getElementById('control6');
var control3 = document.getElementById('control7');

control1.onclick = function(){
    testimonials.style.transform = "translateX(870px)";
    control5.classList.add("active");
    control6.classList.remove("active");
    control7.classList.remove("active");
}
control2.onclick = function(){
    testimonials.style.transform = "translate(0px)";
    control5.classList.remove("active");
    control6.classList.add("active");
    control7.classList.remove("active");
}
control3.onclick = function(){
    testimonials.style.transform = "translate(-870px)";
    control5.classList.remove("active");
    control6.classList.remove("active");
    control7.classList.add("active");
}