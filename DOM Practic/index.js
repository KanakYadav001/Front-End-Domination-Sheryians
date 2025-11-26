
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


// let form  = document.querySelector('form')
// let input = document.querySelectorAll('input[type="text"]')
// let p = document.querySelector('p')



// form.addEventListener('submit', function(ev) {
//     ev.preventDefault()
//     for(let i=0 ; i<input.length ; i++) {
//         if(input[i].value.trim() === ''){
//             p.textContent = "Please Fill The Filds First",
//             p.style.color = "red"
//         }
//         else { 
//             p.textContent = ""
//         }
//     }
// })


// let input  = document.querySelector('input')
// let ul = document.querySelector('ul')
// let li ;
// let add = document.querySelector('.add')
// let remove = document.querySelector('.remove')


// add.addEventListener('click', function() {
//     if(input.value.trim() === ""){}
//     else {
//     li =document.createElement('li')
//     li.textContent = input.value
//     ul.appendChild(li)
//     input.value = ""
//     }
// })

// remove.addEventListener('click',function() {
//     ul.removeChild(li)
// })


let home = document.querySelector('.home')
let homec = document.querySelector('.homec')
let about = document.querySelector('.about')
let aboutc = document.querySelector('.aboutc')
let contact = document.querySelector('.contact')
let contactc  = document.querySelector('.contactc')

home.addEventListener('click',function() {
    removeAllPara()
    homec.style.display = 'block'
    

})
about.addEventListener('click',function() {
       removeAllPara()
    aboutc.style.display = 'block'
   
})

contact.addEventListener('click',function() {
         removeAllPara()
    contactc.style.display = 'block'
})

function removeAllPara() {
     document.querySelectorAll('p').forEach(function (p) {
       p.style.display = "none"
    })
}