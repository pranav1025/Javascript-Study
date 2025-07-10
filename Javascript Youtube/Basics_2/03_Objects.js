//object declearation methode 
// two method of declear the object is 
//1:litteral : when we like litterals is not make singleton
//2:constructer / singleton :when we constructer method is making singleton //object.crete is used in singleton for making object 

/*                          object literals                    */        
const mySym = Symbol ("key1")       
const jsUser ={
    name: "Pranav", // in the object the key , value also define // in the array  only value id define //when we define key the system is 
    // define by default like "name"like string but dont write like this will happen automatically
    " full name ":" Pranav Patil",//this is only access the with in brackets 
    //mySym:"mykey1",//this is right but key do not access as symbol so key  declear in brackets for symbol
    [mySym]:"mykey1",
    age : 24 ,
    location :" Jalgaon",
    email : "PranavPatil.com",
    isLoggedIn:true,
    lastLoginDays:["monday","saturday"]


}
console.log(jsUser.email);//this also the way to accesses the object element but its not use mostly right way is below
console.log(jsUser["email"]);//this most use in access the vlaue always declear in double qoutes
console.log(jsUser[" full name "]);//full name is write in double quotes to access
console.log(typeof jsUser  [mySym]);//access to symbol as type of symbol as dfine above 

jsUser.email="Plpatil,com"//this also take as value 
Object.freeze(jsUser)
jsUser.email="prnav.com"//this not take as value because it is declear as freez object

//console.log(jsUser);
//jsUser.greetings= function(){
   // console.log("hello js user ");
    
//}
//jsUser.greetingstwo= function(){
    //console.log(`hellow js user , ${this.name}`);
    
//}
//console.log(jsUser.greetings());
//console.log(jsUser.greetingstwo());







