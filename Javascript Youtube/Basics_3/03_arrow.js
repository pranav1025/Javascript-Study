const user = {
    username : "pranav",
    price : 999,

    weloccomemassage : function (){
        console.log(`${this.username} ,welcome to website`);//using this function we can get the innr variable of object which is define inside scope
        console.log(this);
        
    }
}



// user.welocomemassage()
// user.username = "Patil"
// user.welocomemassage()
//console.log(this);

// function cricket (){
//     let username ="pranav"
// console.log(this.username);

// }

// cricket()

// const cricket = function (){
//     let username ="pranav"
//      console.log(this.username);
// }
// cricket()

const cricket =  () => {
    let username ="pranav"
     console.log(this);
}
//cricket()

//  const addtwo = (num1,num2) => {
//     return num1 + num2
// }//basic arrow function

//const addtwo = (num1,num2) => num1 + num2
    //implicit return function this emplicit type arrow function can work same as basic arrow but in this
    //method the {} are remove and also the return keyword is also remove

    // const addtwo = (num1,num2) => (num1 + num2)//when we use {} wehave to write return keyword but when we use () we do not write return keyword this mostly used in REACT so this is imp
    
    const addtwo = (num1,num2) => ({username : "pranav"}  ) 
console.log(addtwo(1,2));
 