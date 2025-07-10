//Immediately Invoked Function Expression(IIFE)

(function chai (){            //this is named iife 
    console.log(`DB CONNECTED`)

})();//in the iife the return is immediately come but allover the the function is in () then its gave the return o/p  

//()()  //(first paranthesis is for function defination)(function execution ) . this iife is used for to avoid the global scope pollution like other value is not accessible in inner scope they make global pollution 

// arrow function in iife

(  (name)  => {       //this is unnamed iife and also parameter iife    //in this casse the error come after the code is right but the the error 
// comes from not using the semiclon after the first iife is completed so use semicolon the the error is solved
    console.log(`DB CONNETED TWO ${name}`);
})("Pranav")

//if we write two iife we need the gave semicolon after the first iife is completed so it can solve the error