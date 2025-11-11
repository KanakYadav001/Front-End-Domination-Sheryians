let a =5;
let b =5.2;
let c  ="kanak"
let d = true ;
let e = [1,2,3,4,5]
let f = function(){}
let g = null
let h = undefined


console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));



let z = [1,2,3,4,50]
// let k = z    this line is modify z as well
let k = [...z] //this line donot modify Z insted it copy Z

k.pop()
console.log(z)
console.log(k)




let age =18
if(age>=18) console.log("You Can Apply For Driving Licence");
else if(age>=15) console.log("You Drivie Eletric cycles ");
else console.log("Not Valid Age For Driving");




for(let i=1 ;i<11 ;i++){
    console.log(i)
}

let p =0
while(p<=10){
    console.log(p)
    p++;
}







