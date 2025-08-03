// primitive dattype

//there are 7 primitive datatype
//string,number,boolean ,null , undefined , symbol, bigint

const score =100
const scorevalue =100.3

const isloggedin = false
const outsidetemp = null 
let useremail;

const id=Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


//Non primitive (reference)

//array,objects , functions 

const heros = ["shaktiman" , "nagraj ", "doga"];
let myobj = {
    name: "hitesh",
    age: 22
}

const myfunction = function(){
    console.log("hello world");

}

console.log(typeof (myfunction));
