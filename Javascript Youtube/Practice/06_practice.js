//dates
let mydate = new Date()
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());

let mycreatedate = new Date ("2025-01-24")
console.log(mycreatedate.toDateString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
console.log(Math.round (Date.now()/10000))

let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getSeconds());
console.log(newdate.getMinutes());
console.log(newdate.getHours());

console.log(`Today's date is ${(newdate.getDate())},Now the time is ${(newdate.getHours())} `);

newdate.toLocaleString('default',{
    weekday:"long"
    
})