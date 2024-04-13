let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")

menuBtn.onclick = function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right ="0";
        menu.src = "close3.png";
    }
    else{
        sideNav.style.right ="-250px";
        menu.src = "menu4.jpg";
    }
}


// :::::::::::::

const words =["PARTENAIRES pour mieux servir notre Public Cible "]
let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat:-1})

let boxTl = gsap.timeline()

boxTl.to('.box', {duration: 1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y:"7vw", ease: "power3.out", onComplete: () => masterTl.play()})
.to('.box', {duration: 1, height:"7vw", ease: "elastic.out"})
.to('.box', {duration: 2, autoAlpha:0.5, yoyo: true, repeat: -1})

let masterTl = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTl.add(tl)
});


// ::::::::
function bgChanger() {
    if(this.scrollY > this.innerHeight / 1.9 ){
        document.body.classList.add("bg-active");
    } else {
         document.body.classList.remove("bg-active");
    }
   }
   window.addEventListener("scroll", bgChanger);