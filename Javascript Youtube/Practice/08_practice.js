const sym =Symbol("key1")
 
const jsuser = {
    name : "pranav",

    "fullname": "pranav lalit patil",
    email:"pranavpatil@mail.com",
    [sym]:"key",
    age : 24,
    isloggedin :true,
    lasstloggeddays:["monday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser["age"]);
console.log(jsuser["name"]);
console.log(jsuser["lasstloggeddays"]);
console.log(jsuser['fullname']);
console.log(jsuser[sym]);

jsuser.email="pranavl"
//Object.freeze(jsuser)
jsuser.email="pranavllll"
console.log("email");

jsuser.greeting= function (){
    console.log("Hello js user");
    
}
jsuser.greetingtwo= function (){
    console.log(`Hello js user,${this.name}`);



}
    
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());








