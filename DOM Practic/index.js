
// let btn =document.querySelector('button')
// let para = document.querySelector('p')
// btn.addEventListener('click',function () {
//     para.textContent = "helooo DOM"
// })


// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let btn2 = document.querySelector('.btn2')

// btn2.addEventListener('click', function() {
//     let im1 = img1.src
//     let im2 = img2.src

//     img1.src = im2
//     img2.src = im1

// })


let form  = document.querySelector('form')
let input = document.querySelectorAll('input[type="text"]')
let p = document.querySelector('p')



form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    for(let i=0 ; i<input.length ; i++) {
        if(input[i].value.trim() === ''){
            p.textContent = "Please Fill The Filds First",
            p.style.color = "red"
        }
        else { 
            p.textContent = ""
        }
    }
})