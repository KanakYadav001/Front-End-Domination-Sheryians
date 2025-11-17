let button1 = document.querySelector("button");
let button2 = document.getElementById("btn2");
let button3 = document.getElementsByClassName('btn3')[0];



button1.addEventListener('click' , function(){
    button1.textContent = "kanak"
})
button2.addEventListener('click', function() {
    button2.textContent =  "Hello "
})


button3.addEventListener('click', function() { 
    button3.textContent = "bye..."
})