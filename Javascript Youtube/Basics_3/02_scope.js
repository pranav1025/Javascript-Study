// let a = 10 //outside if scope is global scope
// const b =20
// var c = 30 //this declearation is outside scope so this value is not accesible in scope 

if (true){let a = 10 // inside the if scope is block scope
           const b =20
           var c =30 //avoid this var declaration
        }
          
    //  {}this is known aas scope ,in the object the {} is known as object declearation 
// //{}is come with function if else is known as scope
//  console.log(a);

//  console.log(b);

// console.log(c);

//in javascript we make the function ,if else ,loop make saprate scope make the differnt entity
//from the global scope we can access the value inside the scope but the inner scope value is not leak the
// the value outside scope make big problem

// nested scope
function one (){
    const username  = "Pranav"

    function two (){
        const website ="youtube"
        console.log(username);

        

    }
    //console.log(website);
    //two()
    
}
//one()

if (true){
    const username1 = "pranav"
    if (username1==="pranav"){
        const website =" youtube"
        //console.log(username1 + website);
        
    }//console.log(website);
    
}//console.log(username);

//++++++++++++++++++++++++++++++++++++intresting +++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone (num){
    return num +1

}
//addone(5); its accesible here or above both place

//console.log(addtwo(5));// it is not accessible here because its gave error add two is declear before initialization

const addtwo = function (num){
    return num + 2

}
addtwo(5) //is accessible here 