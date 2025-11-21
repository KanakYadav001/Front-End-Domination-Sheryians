gsap.to(".page2 img", {
    width : "80%" ,
    scrollTrigger : {
        trigger : ".page2",
        scroller : "body",
        start : "top 20",
        end : "top -100%",
        scrub : true,
        pin : true 

    }
})

gsap.to(".page4 h1", {
    transform : "translateX(-40%)",
    scrollTrigger : {
        trigger : ".page4",
        start : "top 0",
        end : "top -100%",
        scroller : "body",
        scrub : 2 ,
        pin :true,
    }
})