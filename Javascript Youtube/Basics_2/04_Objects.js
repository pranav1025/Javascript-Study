//const tinderUser = new Object ()
const tinderUser ={}//no internal difference in output above statement or this statment only difference. 1st statement is singleton object or second statment is not 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
 
 const regularUser = {
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname :"Pranav" ,
            lastname :"Patil" 

        }
    }
}
//console.log(regularUser.fullname .userfullname.firstname); //using this type of inter releted object can be easily accessible
const obj1  ={1 : "a", 2 : "b"}
const obj2  ={3 : "a",  4: "b"}
const obj3  ={5 : "a",  6: "b"}
//const obj4 = Object.assign( {},obj1,obj2,obj3)//object.assign is used for to mix special object into sigle one its value remain same 
//  {}using this function we can store the value into {} emty object not in first object
const obj4 = {...{},...obj1,...obj2}//this is called spred oprater we also use in array to combain
// console.log(obj4);

const users = [
    {
        id:1,
        email:"Pranavpatiamil.com"

    },
    {

    },
    {

    },
    {

    }
]
users[1].email


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));//using this object.keys  function we can get keys,valueslike this
//console.log(Object.values(tinderUser));//its return the values of given keys in object 
//console.log(Object.is(tinderUser));//is used to check same vlaue of another key if its same then its reply true else return false 
//console.log(Object.entries(tinderUser));//its make special all the key & value by its function like  its array all the key and value in special array second in special array like this

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//its hepls to check boolean value the given value is available in object or not or not if it not avilable it gave false in return


/* *************************************************************/

//           Destructuring of Object

const course ={
    coursename: "Js in hindi",
    price: "9000",
    courseinstructer:"Hitesh Choudhri"

}
//console.log( course["courseinstructer"]);// this also the teqnique to access the object value 

//const {courseinstructer}=course//this is second way to declear the object value 
//console.log(courseinstructer);

//we can change the name codeinsructer like below way

const {courseinstructer:instructer}=course//same value is o/p
console.log(instructer);
//this above or below is object destructure methode

//const navbar = ({company})   => {}
navbar(company = "Pranav")//({company }) this  methodde is known as the destructuring methode of object is used in react
//using this easily destructuring the object company above

/******************************API Concept******************************** */
// API is nothing just the concept to write the value which comes from backend 
//in old days the value is comes in X-mal structure but tht is very compllex to understand
//this days the value come from backend in form of J-son
//in javascript fetch methode is used call the given url or somthing which is provide usin this methode we get the backend data
/***************************j-son format************************************* */ 

//{
    //"name" :"Pranav",
    //"coursename":"js in hindi",
    //"price ":"free" //in the sentence the error because we write in j-son format not in javascript format this syntax is right
    //in j-son the key also be like string in double quots
    //the number and boolean value is not in double quotes in j-son format
//}
//api is not only in object format is also in array format
//this array foramt to declrear API 
[
    {},
    {},
    {}
]