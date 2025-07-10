// //object singleton

// //const tinderuser = new Object()
// const tinderuser ={} 

//  tinderuser.id ="1223abc"
// tinderuser.name ="sam"
// tinderuser.islloggedin=false
// //console.log(tinderuser);


// const regularuser={
//     email:"pranavpatil",
//     fullname :{
//         usersfulname:{
//             firstname:"Pranav",
//             lastname:"Patil"
//         }
//     }
// }
// //console.log(regularuser.fullname.usersfulname.firstname);

// const obj1 ={1:"A",2:"B"}
// const obj ={3:"A",4:"B"} 

// //const obj3 =Object.assign({},obj,obj1)
// const obj3 ={...obj,...obj1}
// console.log(obj3);

// const users1 =[
//     {
//         id:1,
//         age:14
//     },{
//         id:1,
//         age:14
//     },
//     {
//         id:1,
//         age:14
//     },
    

// ]
// users1[1].id
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("islloggedin"));


const course = {
    coursename :"js in hindi",
    fees: 999,
    teachers : "hitesh"

}
const {coursename : couse1} = course
console.log(couse1);

