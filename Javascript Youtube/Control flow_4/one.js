//In the coding always not run all the code only run code which is we need the output that is known as control flow
//if
// const isuserloggedin = true

// if (2=="2") {              //when the only condition is true the code run {}
//     console.log("exicuted");
    
// }

// < , > , <= , >= , == , != , === , !== ,
// const temprature = 55
// if (temprature <50) {
//     console.log("less than 50");
    
// }else
// console.log("is greter than 50");//if  else condition stament


// const score = 300 
// if (score>100)

// {
//     const power ="fly"
//     console.log(`user power:${power}`);
    
//}

 const balence = 1000
// if(balence>500) console.log("test"),console.log("test2");
;//dnt write like that

// if (balence <500){
//     console.log("less than 500")
    
// }else if (balence <750){
//     console.log("less than 750")

// }
    
// else if (balence<900){
//     console.log("less than 900")
    
// }else{
//     console.log("less than 1200" )
    
// }

const userloggedin = true 
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if (userloggedin && debitcard) { //when we use && all value needs to be true if any single value is false
    //it not goes to run the if condition
    console.log("Allow to buy course");
    
}
if (loggedinfromemail || loggedinfromgoogle) //in this case the not all value needs to be true if any
//single value is true is go in the if statement
    {
        console.log("user is logged in");
        
    }

