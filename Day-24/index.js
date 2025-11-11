
//function statement
function add(a,b){
    return a+b
}

let c = add(5,5)
console.log(c);



//function Expression 

let j = function() {
    return 1
}
console.log(j())


//fat arrow function

let a = () => {
    return "Hello"
}
console.log(a())

//fat arrow with 1 parameter

let b  = (val)=>{
      return val+50;
}
console.log(b(25));

//anoymous function 

// function() => {
//     return "Helloo"
// }

//fat arrow function without fat (only work if function have 1 parameter )

let v = val => {
     return "Namasta" + val
}


console.log(v(" kanak "))


//implicet return 

let l = () => "hello"

console.log(l())