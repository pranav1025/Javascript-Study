//function myname  (){
    // console.log("P");
    // console.log("R");
    // console.log("A");
    // console.log("N");
    // console.log("A");
    // console.log("V");
//}
//myname()

// function addtwonumbers (number1,number2){
//    console.log (number1+number2);
// // }
// function addtwonumbers (number1,number2){
//     // const result= (number1+number2);
//     // return result
//     return   number1+number2
// }
// const result  = addtwonumbers(11,12)
// console.log("result:", result);

// function loginusermassage (username){
//     if(username===undefined){console.log("plese enter user name");
//         return
//     }
//     return `${username } just logged in `


// }
// console.log(loginusermassage("pranav "));
 
//function calculatecartprice(...num1){
//return num1
//}
//console.log(calculatecartprice(1100,222,44,556,7,8,99));

const userr ={
    username:"pranva",
    id:11234,
    price:223
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject({
    username:"patil",
    price:222
})
const myarr = [200,300,400,500]
function returnsecondvalue(getArray){
    return getArray[1]

}
console.log(returnsecondvalue(myarr));
console.log(returnsecondvalue([200,300]));
