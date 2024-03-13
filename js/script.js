let subNavBtn1 = document.getElementsByClassName("subNavBtn")[0]
let subNavBtn2 = document.getElementsByClassName("subNavBtn")[1]
let subNavBtn3 = document.getElementsByClassName("subNavBtn")[2]
let productContent = document.getElementById("productContent")
let solutionContent = document.getElementById("solution-content")
let resourceContent = document.getElementById("resource-content")
let hideMenu = document.getElementsByClassName("fa-bars")[0]
let Responsive = document.getElementsByClassName("Responsive")[0]
let video1 = document.getElementsByClassName("video1")[0]
let video2 = document.getElementsByClassName("video2")[0]
let video3 = document.getElementsByClassName("video3")[0]
let video1Res = document.getElementsByClassName("video1-res")[0]
let video2Res = document.getElementsByClassName("video2-res")[0]
let video3Res = document.getElementsByClassName("video3-res")[0]
let videoFeatured = document.getElementsByClassName("video-featured")[0]
let navLinkDesktop = document.getElementsByClassName("navLinkDesktop")[0]
let main = document.getElementById("main")
let dark = document.getElementById("Dark")
let light = document.getElementById("Light")
let lightDark = document.getElementById("Background")
let contactIcon = document.getElementById("contact-icon")
let contactUs = document.getElementsByClassName("contact-us")[0]
let plus = document.getElementById("p")
let facebook = document.getElementById("f")
let twitter = document.getElementById("t")
let linkedin = document.getElementById("l")
let explainBox = document.getElementById("explain-box")
var el_t = document.getElementById('textarea');
var length = el_t.getAttribute("maxlength");
var el_c = document.getElementById('count');
let plus1 = document.getElementsByClassName("fa fa-plus")[0]
let minus1 = document.getElementsByClassName("fa fa-minus")[0]
let ans1 = document.getElementsByClassName("ans")[0]
let title1 = document.getElementsByClassName("q-title")[0]
let plus2 = document.getElementsByClassName("fa fa-plus")[1]
let minus2 = document.getElementsByClassName("fa fa-minus")[1]
let ans2 = document.getElementsByClassName("ans")[1]
let title2 = document.getElementsByClassName("q-title")[1]
let plus3 = document.getElementsByClassName("fa fa-plus")[2]
let minus3 = document.getElementsByClassName("fa fa-minus")[2]
let ans3 = document.getElementsByClassName("ans")[2]
let title3 = document.getElementsByClassName("q-title")[2]
const accTitle = document.querySelectorAll(".q-title")
const slide = document.querySelector('.slider').children;
const indicator = document.querySelector('.slider-indicator').children;
let modal = document.getElementById("modal")
//* --------Default Initialization--------- */
plus.style.cursor = "pointer"
facebook.style.display = "none"
twitter.style.display ="none"
linkedin.style.display ="none"
productContent.style.display = "none"
solutionContent.style.display = "none"
resourceContent.style.display = "none"
Responsive.style.display = "none"
//*** Default Display ***/
plus1.style.display = "block"
minus1.style.display = "none"
ans1.style.display = "none"
plus1.style.cursor = "pointer"
minus1.style.cursor = "pointer"
title1.style.cursor = "pointer"

plus2.style.display = "block"
minus2.style.display = "none"
ans2.style.display = "none"
plus2.style.cursor = "pointer"
minus2.style.cursor = "pointer"
title2.style.cursor = "pointer"

plus3.style.display = "block"
minus3.style.display = "none"
ans3.style.display = "none"
plus3.style.cursor = "pointer"
minus3.style.cursor = "pointer"
title3.style.cursor = "pointer"
el_c.innerHTML = length;
//*------------Loading----------- */
window.addEventListener('load', function(){
    const loader = document.querySelector('.loader');
    loader.classList += ' hidden';
})
/*-----------SubnavBtn-------------- */
subNavBtn1.addEventListener("click", function(){
    productContent.style.display = "block"
    solutionContent.style.display = "none"
    resourceContent.style.display = "none"
    subNavBtn1.style.display = "flex"
})
subNavBtn2.addEventListener("click", () => {
    productContent.style.display = "none"
    solutionContent.style.display = "block"
    resourceContent.style.display = "none"
})
subNavBtn3.addEventListener("click", () => {
    productContent.style.display = "none"
    solutionContent.style.display = "none"
    resourceContent.style.display = "block"
})
/*------------How to Occurs Clicked Body--------- */
main.addEventListener("click", function(){
    Responsive.style.display = "none"
    productContent.style.display = "none"
    solutionContent.style.display = "none"
    resourceContent.style.display = "none"
    contactUs.style.display = "none"
    contactIcon.style.display = "block"
})
/*--------Responsive Menu----------------- */
hideMenu.addEventListener("click", function() {
    Responsive.style.display = "block" 
})
video1Res.addEventListener("mouseover", function(){
    video1Res.style.cursor = "pointer"
    video1Res.play()
})
video1Res.addEventListener("mouseout", function(){
    video1Res.style.cursor = "pointer"
    video1Res.pause()
})
video2Res.addEventListener("mouseover", function(){
    video2Res.style.cursor = "pointer"
    video2Res.play()
})
video2Res.addEventListener("mouseout", function(){
    video2Res.style.cursor = "pointer"
    video2Res.pause()
})
video3Res.addEventListener("mouseover", function(){
    video3Res.style.cursor = "pointer"
    video3Res.play()
})
video3Res.addEventListener("mouseout", function(){
    video3Res.style.cursor = "pointer"
    video3Res.pause()
})
/*----------Default Menu---------------- */
video1.addEventListener("mouseover", function(){
    video1.style.cursor = "pointer"
    video1.play()
})
video1.addEventListener("mouseout", function(){
    video2.style.cursor = "pointer"
    video1.pause()
})
video2.addEventListener("mouseover", function(){
    video2.play()
})
video2.addEventListener("mouseout", function(){
    video2.style.cursor = "pointer"
    video2.pause()
})
video3.addEventListener("mouseover", function(){
    video3.style.cursor = "pointer"
    video3.play()
})
video3.addEventListener("mouseout", function(){
    video3.style.cursor = "pointer"
    video3.pause()
})
/*------------Follow In Social Network------------- */
plus.addEventListener("click", function(){
    facebook.style.display = "block"
    twitter.style.display ="block"
    linkedin.style.display ="block"
    plus.style.transform = "rotate(45deg)" 
    facebook.style.transform = "translateY(-105%)"
    twitter.style.transform = "translateY(-50%)"
    linkedin.style.transform = "translateY(-80%)"
    facebook.style.transitionDelay = "5s"
    twitter.style.transitionDelay = "5s"
    linkedin.style.transitionDelay = "5s"
    facebook.style.transitionDuration = "5s"
    twitter.style.transitionDuration = "5s"
    linkedin.style.transitionDuration = "5s" 
    explainBox.style.display = "none"
})
plus.addEventListener("dblclick", function(){
    explainBox.style.display = "block"
    facebook.style.display = "none"
    twitter.style.display ="none"
    linkedin.style.display ="none"
    plus.style.transform = "rotate(180deg)" 
})
follow = setInterval(function(){
    
    if(explainBox.style["visibility"]=="hidden"){
        explainBox.style["visibility"]="visible";
    }
    else
    {
        explainBox.style["visibility"]="hidden";
    }
},1000);
/*------------Contact Icon------------------ */
contactIcon.addEventListener("click", () => {
    contactIcon.style.display = "none"
    contactUs.style.display = "block"
})
el_t.addEventListener("keyup" , function() {
    document.getElementById('count').innerHTML = el_t.value.length + "/" + length 
})
/*------------Video in Content------------ */
videoFeatured.addEventListener("click" , function(){
    videoFeatured.play() 
})
videoFeatured.addEventListener("dblclick" , function(){
    videoFeatured.pause()
})
/*--------------FAQ Section----------------- */
//*** Question & Answer 1 ***/

plus1.addEventListener("click", function(){
    minus1.style.display = "block"
    ans1.style.display = "block" 
    plus1.style.display = "none"
    title1.style.background = "#58a9aa"
})
minus1.addEventListener("click", function(){
    plus1.style.display = "block"
    ans1.style.display = "none"
    minus1.style.display = "none"
    title1.style.background = "#0a8483"
})

//*** Question & Answer 2 ***/

plus2.addEventListener("click", function(){
    minus2.style.display = "block"
    ans2.style.display = "block" 
    plus2.style.display = "none"
    title2.style.background = "#58a9aa"

})
minus2.addEventListener("click", function(){
    plus2.style.display = "block"
    ans2.style.display = "none"
    minus2.style.display = "none"
    title2.style.background = "#0a8483"
})

//*** Question & Answer 3 ***/

plus3.addEventListener("click", function(){
    minus3.style.display = "block"
    ans3.style.display = "block" 
    plus3.style.display = "none"
    title3.style.background = "#58a9aa"
})
minus3.addEventListener("click", function(){
    plus3.style.display = "block"
    ans3.style.display = "none"
    minus3.style.display = "none"
    title3.style.background = "#0a8483"
})
//*----------------- Custumer Opinion--------------*/
for(i = 0;i < indicator.length; i++){
    indicator[i].addEventListener('click', function(){

        for(j=0;j<indicator.length;j++){
            indicator[j].classList.remove('active');
        }
        this.classList.add('active');



        const id = this.getAttribute('data-id');
        for(z=0; z < slide.length; z++){
            slide[z].classList.remove('active');
        }

        slide[id].classList.add('active');


    })
}
/*----------------Banner Cookie---------------- */
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("modal").style.display = "block"
  setTimeout(function() {modal.style.display = "none"}, 5000)
}
console.log(myTimeout)
setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
 
    if (seconds <60){
        ++seconds
        if(seconds < 10){
            seconds = "0" + seconds;}
    }
        
    else if (seconds ==60){
        
        minutes++
        if(minutes < 10){
            minutes = "0" + minutes;}
    } 
        
    else if (minutes == 60){
        hours ++
        if(hours < 10){
            hours = "0" + hours;}
    } 
    time.textContent = hours + ":" + minutes + ":" + seconds ;
  });

/*------------------Dark & light Mode---------------- */

let theme = document.querySelector("#selTheme")
let faq = document.querySelector(".FAQ")
let colHead = document.querySelector(".colhead")
let colfooter = document.querySelector(".colfooter")
let toggle = document.querySelector(".fa-toggle-off")

document.body.classList.add("light-mode")
faq.classList.add("dark-mode")
colHead.classList.add("light-mode")
colfooter.classList.add("light-mode")


theme.value = "light"
theme.addEventListener("change", () => {

    console.log(theme.value)
    if(theme.value == "dark"){
        document.body.classList.replace("light-mode","dark-mode")
        colfooter.classList.replace("light-mode","dark-mode")
        faq.classList.replace("dark-mode","light-mode")
        colHead.classList.replace("light-mode","dark-color")
        toggle.classList.replace("fa-toggle-off","fa-toggle-on")

    }
    else{
        document.body.classList.replace("dark-mode","light-mode")
        colHead.classList.replace("dark-color","light-mode")
        toggle.classList.replace("fa-toggle-on","fa-toggle-off")
        faq.classList.replace("light-mode","dark-mode")
       
        
    }
})
/*-----------------Search---------------*/
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
btn.addEventListener('click', function() {
    search.classList.toggle('active');
    input.style.display = "block"
    //input.focus()
})














