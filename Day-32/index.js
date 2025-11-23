const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


gsap.from(".main .page4 .box", {
    rotate : 360,
    scale :0,
    opacity : 0,
    delay :1,
    duration : 5 ,
    scrollTrigger:{
     target : ".main .page4 .box",
     scroller : ".main",
     start : "top 50%",
     markers : true,
    }
})

gsap.from(".main .page5 .box", {
     rotate : 360,
    scale :0,
    opacity : 0,
    delay :1,
    duration : 5 ,
    scrollTrigger:{
     target : ".main .page4 .box",
     scroller : ".main",
     start : "top 50%",
     markers : true,
    }
    
})

gsap.from(".main .page6 .box", {
     rotate : 360,
    scale :0,
    opacity : 0,
    delay :1,
    duration : 5 ,
    scrollTrigger:{
     trigger : ".main .page4 .box",
     scroller : ".main",
     start : "top 50%",
     markers : true,
    }
})

