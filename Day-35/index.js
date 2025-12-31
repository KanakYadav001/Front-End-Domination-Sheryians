


setTimeout(function(){
    console.log("Hello This Is Set Timeout");
    
},2000)

count =0
let myintervel =setInterval(function(){
    ++count
    if (count ==2) clearInterval(myintervel)
    console.log(count);
    
},2000)



fetch('https://dog.ceo/api/breeds/image/random')
.then(result => result.json())
.then(res => console.log(res.status))



axios.get('https://dog.ceo/api/breeds/image/random')
.then(res => console.log(res))




let chithi  = new Promise(function(resolve,unsolve){
   fetch('https://dog.ceo/api/breeds/image/random')
   .then(result => result.json())
   .then(res => {
    if(res.status ==="success") resolve()
    else unsolve()
   })
})

chithi.then(function(){
    console.log("Data Found Sucessfully")
})
.catch(function() {
    console.log("Data Unsucessfully Featch")
})



