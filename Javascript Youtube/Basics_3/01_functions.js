function myname (){//this is the declaration of function function name () {}
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("v");
    

}
//myname()
function addtwonumbers(number1,number2){//number 1 nuber2 is parameter here 
    //console.log(number1+number2);
    return(number1+number2)
}
const result = addtwonumbers(24,25)//24,25 is argument here

//console.log("result:",result);

function loginuser(username="patil"){//alredy given userinput
    if(!username){//if else condition 
        console.log("please enter username");
        return

    }
      return` ${username} has logged in `
}
console.log(loginuser(""));//undefined functio then so it goes into if else condition

function calculatecartprice(...num1){//(...rest oprater in this statement this rest oprater it havealso anoter function like spred oprater but it depend on 
    // condition when you use for rest oprater or spred oprater )
return num1
}
console.log(calculatecartprice(200,300,400));//the rest oprater is used here using the rest oprater we can take multiple value we do not define//using this we get the value in array

const user ={
    username:"pranav",
    price : 300 //in this ffunction if the key value is changed then it give o/p as undefined in this method also check the tupe safty
}
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}  `);
    }
//handleobject(user)
//this is second method of passing dirct object
handleobject(
    {
        username:"PATIL",
        price:400
    }
)//this dirctlyget the object we dont define the object first

//array      passing in function

const mynewarray = [1,2,3,4,5,6,7]

function returnsecondvalue(getarray){
    return getarray[3]
}

//console.log(returnsecondvalue(mynewarray));

console.log
 (returnsecondvalue (
    [1,2,3,4,5,6,7,8,9]

));;