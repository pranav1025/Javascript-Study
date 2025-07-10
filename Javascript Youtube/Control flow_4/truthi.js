const UserEmail = "pranav@email"

if (UserEmail) {
    console.log("Got user Email");
    
}else {
    console.log("Don't have user email");
    
}

//falsy value
//false , 0 , -0 , bigint 0n , null , undefined , NaN

//truthi value

//true , "0" , "false" this is sring value , " " space in empty string is true, [] empty array ,
//  {} empty object , function {} empty function

// if ( UserEmail.length === 0  ) { 
//     console.log("Array is Empty");
    
// }

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

//Nullish Coalesing Oprater (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//ternary oprater 

// condition ? true : false 

const iceteeprice =100
iceteeprice >= 80 ? console.log("less than 80") : console.log("more than 80");


