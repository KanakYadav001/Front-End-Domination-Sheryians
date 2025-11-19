gsap.to(".div1",{
    rotate : 360,
    duration : 1 ,
    x : 200 ,
    backgroundColor : "pink" ,
    delay : 1 
})

gsap.from(".div2", {
    rotate  : 360,
    duration : 1 ,
    x : 200 ,
    backgroundColor : "pink" ,
    delay : 1 
})



 
let time = gsap.timeline()

time.to(".div3", {
    x : 500, 
    backgroundColor : "yellow",
    duration : 1 ,
    delay :1 

})

time.to(".div4", {
    x : 500, 
    backgroundColor : "yellow",
    duration : 1 ,
    delay :1 

})

time.to(".div5", {
    x : 500, 
    backgroundColor : "yellow",
    duration : 1 ,
    delay :1 

})