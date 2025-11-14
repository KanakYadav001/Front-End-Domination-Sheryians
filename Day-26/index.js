// console.log(a)  not define  in the form of error 
let b; 
console.log(b) //return undefine



let c= null ;
console.log(c); //return null

function abcd() {    //this is globel window
    console.log(this)
}

abcd()


let obj = {   //obj method in es5
    name : function() {
        console.log(this)

        function xyz() {
        console.log(this)
        }

        xyz()
    }
}
obj.name();

console.log("Hello ");
console.log("Hello ");
console.log("Hello");


let abj1 = {  // obj method in es6
    name : function () {

     let abc = () => {
        console.log(this)
     }
        abc()
    }
}
obj.name() 


let  obj3 = {
   name : () => {
    console.log(this)
   }
}


obj3.name()




function Container1(){
   console.log(this);
   
  
}

let acd = new Container1()


//call apply bind

const obj11 = {name : "kanak Yadav"}

function call() {
   console.log(this);
   
}

call.call(obj11)


//apply
const obj12 = {name : "kanak Yadav"}

function call4(a,b,c) {
   console.log(this,a,b,c);
   
}

call4.apply(obj11,[1,2,3])

//bind


const obj13  = {
    name : "Kanak Yadav"
}

function call5() {
    console.log(this);
    
}

let aftercall = call5.bind(obj13)
aftercall()


//inheritence


function Userdata11(username,age,email) {
    this.username = username;
    this.age =age;
    this.email =email
   
}

let data = new Userdata11("Kanak Yadav",25,"kanakyadav9654@gmail.com");
console.log(data)