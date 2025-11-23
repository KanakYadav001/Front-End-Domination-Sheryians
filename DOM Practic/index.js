
let btn =document.querySelector('button')
let para = document.querySelector('p')
btn.addEventListener('click',function () {
    para.textContent = "helooo DOM"
})


let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', function() {
    let im1 = img1.src
    let im2 = img2.src

    img1.src = im2
    img2.src = im1

})