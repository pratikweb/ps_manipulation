// document.querySelector("#nav-right button",addEventListener("click",function(){
// }))
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var element2 = document.querySelector("#nav-bottom h2");
    element2.classList.toggle("dark-mode");
    
//    var dm =  document.querySelector("#darkmode",addEventListener("click",function(){
//         // dm.alert("Night Mode ON");      
//         if(dm.click){
//             console.log("hellp")
//         }
//     }))

}

var tl = gsap.timeline()

function time(){
    var a = 0
   setInterval(function(){
    a =a + Math.floor(Math.random()*20)
  
    if(a<=100){
        document.querySelector("#loader h1").innerHTML = a+"%";
    }else{
        a=100
        document.querySelector("#loader h1").innerHTML = a+"%";        
    }
    
   },150)
}


tl.to("#loader h1",{
    delay:0.5,
    duration:1.5,
    onStart:time()
})
tl.to("#loader",{
    top:"-120vh",
    delay:0.4,
    duration:1.5
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});