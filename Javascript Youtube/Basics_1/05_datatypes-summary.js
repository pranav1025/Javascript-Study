//primitive 
// 7 types  : String, Number,Boolean,null,undefined,symbol,
// biggint

const score=300
const scorevalues = 330.56

const isloggedIn=true
const outsidetemp=null //null means completely empty not 0 because 0 means means value in example temprature
let useremail;// this type declaration means manuallay undefined but also we can  defne as undefined
 
const userid=Symbol('123')//value is same but due to symbol datatype is define in varification false
const anotheruserid=Symbol('123')
console.log(userid===anotheruserid);
console.log(typeof userid);

const bignumber=847585959n//bigint



//referance (non primitive)
//array,object,function
const heros= ["superman","spiderman","batman"]//this is array 
console.log(typeof heros);
let myobj = {
    name:"Pranav",
    contact : 24 
}//this is define as object
const myfunction =function(){
    console.log('hello world');
    
}//this define as function

console.log(typeof bignumber); //to check the type of of bignumber function



//******************************************************************* */
//                           memory
//primitive datatype = stack memory
//non-primitive datatype = Heap memory 
let myname = "pranav patil"
let anothername = myname
anothername="pranav baviskar"
console.log(anothername);
console.log( myname); 

let username= {
    eamilid:"sadajs@gamil.com",
    height :"user@ybl"
}
let userinfo= username
userinfo.eamilid="soferhi@gmail.com"
console.log(username.eamilid);
console.log(userinfo.eamilid);



