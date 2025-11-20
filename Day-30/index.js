gsap.registerPlugin(ScrollTrigger);


gsap.from(".page1 .circle", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 3,
  delay: 1,
  
});
gsap.from(".page2 .circle", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 3,
  scrollTrigger: {
    trigger : ".page2 .circle",
    scroller : "body",
    start : "top 70%",
    end : "top 10%",
    markers : true ,
     scrub : true,
  }
});

gsap.from(".page3 .circle", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 3,
  delay: 1,
//   scrollTrigger: ".page3 .circle",
});
