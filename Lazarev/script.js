var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function() {
    var tl = gsap.timeline()

    tl.to("#nav-bottom",{
        height:"17vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
     tl.from(".nav-part2 h5 span",{
        y:12,
        stagger:{
            amount:0.6
        }
    })
})