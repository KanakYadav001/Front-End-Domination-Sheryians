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

// let home = document.querySelector('.home')
// let homec = document.querySelector('.homec')
// let about = document.querySelector('.about')
// let aboutc = document.querySelector('.aboutc')
// let contact = document.querySelector('.contact')
// let contactc  = document.querySelector('.contactc')

// home.addEventListener('click',function() {
//     removeAllPara()
//     homec.style.display = 'block'

// })
// about.addEventListener('click',function() {
//        removeAllPara()
//     aboutc.style.display = 'block'

// })

// contact.addEventListener('click',function() {
//          removeAllPara()
//     contactc.style.display = 'block'
// })

// function removeAllPara() {
//      document.querySelectorAll('p').forEach(function (p) {
//        p.style.display = "none"
//     })
// }

// let h3 = document.querySelector('h3')
// let progress = document.querySelector('.progress')
// let count =0 ;
// let int = setInterval(function() {
//     if(count===100) {
//         clearInterval(int)
//         h3.style.opacity = 1
//     }
//     count++
//     progress.style.width = count +"%"
// },50)

// let data = [
//   {
//     name: "Yashi",
//     src: "https://images.unsplash.com/photo-1762770640764-bfb05d380670?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     name: "Sparsh",
//     src: "https://images.unsplash.com/photo-1763598363324-cd072a67dc61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
//   },
//   {
//     name: "Mario",
//     src: "https://images.unsplash.com/photo-1762391965624-279023a2481d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
//   {
//     name: "Aman",
//     src: "https://images.unsplash.com/photo-1762757076979-cc016f6df284?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2M3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
//   {
//     name: "Cheeky",
//     src: "https://images.unsplash.com/photo-1761522002071-67755dc6c820?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
//    {
//     name: "Dhruv",
//     src: "https://plus.unsplash.com/premium_photo-1761298779249-1165dd0f3fb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
//    {
//     name: "Manthan",
//     src: "https://images.unsplash.com/photo-1741732311355-808c468deb4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
//    {
//     name: "Vaibhav",
//     src: "https://images.unsplash.com/photo-1761872936205-88ce12255c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0MHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
//   },
// ];


// let profiles = document.querySelector('.profiles')
// let input = document.querySelector('input')
// let show = ""

// data.forEach(function(e) {
//   show += `
//   <div class="profile">
//        <div class="image">
//         <img src="${e.src}" alt="img">
//        </div>
//         <h3>${e.name}</h3>
//     </div>
//   `

// })
// profiles.innerHTML = show




// input.addEventListener('input', function() {
//   let match  =  data.filter(function(e) {
//     return  e.name.startsWith(input.value)
//   })
//   let newUser = "" ;
//   match.forEach(function(ele){
//     newUser +=`
//     <div class="profile">
//        <div class="image">
//         <img src="${ele.src}" alt="img">
//        </div>
//         <h3>${ele.name}</h3>
//     </div>`
//   })

//   profiles.innerHTML = newUser
// })




let textarea = document.querySelector('textarea')
let counter = document.querySelector('.count')

textarea.addEventListener('input',function() { 
     counter.textContent = textarea.value.length
})