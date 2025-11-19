gsap.from(".nav p", {
    y : -50,
    opacity : 0,
    delay : 0.3,
    duration : 3,
stagger : 0.3

})
let t1 = gsap.timeline()
t1.from(".main h1 ",{
   x : -500,
   duration : 2,
   delay:1,
   opacity:0,
   stagger : 1
})

gsap.from(".main img" , {
    x : 100,
    opacity : 0,
    duration : 0.3,
    rotate: 45,
    delay : 1.5,
    stagger : 1
})

gsap.from(".footer p" ,{
    opacity : 0 ,
    y:10,
    duration : 2,
stagger : 0.3


})