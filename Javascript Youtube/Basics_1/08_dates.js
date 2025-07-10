//Dates
 let mydate = new Date ();
 //console.log( mydate.toString());//to define the date and time 
 //console.log( mydate.toDateString());//to define only date 
 //console.log( mydate.toLocaleDateString());//local date string 
 //console.log( mydate.getMonth());//to get running month .month start from the 0 like array
 //console.log(mydate.getUTCDate());//universal time co-ordinate date 
 //console.log(mydate.getTimezoneOffset())//gets difference in minutes between universal time co-ordinate and the time on local computer
//console.log(typeof mydate);//object as we define above  new date is creted as object so mydate is instance in the given so its also a object


let mycreateddate = new Date(2025,0,21)// month is started from 0 
//console.log(mycreateddate.toDateStrin());//its show the date of this given year and also show attomatically monday in givan output

let mycreateddatetime = new Date(2025,0,21,16,30)//this format gives us our given time and date and
//  one thing to note is to define the time plese give 24 hours time and the format of the date is month ,date ,year
//console.log(mycreateddatetime.toLocaleString());

let createmydateformat = new Date('2000-01-25')//to make the date format like mm-dd-yyyy also make format like yyyy-mm-dd. "when the month is in our decleration the month should not decleared single digit
// always declear double digit "
//console.log(createmydateformat.toLocaleDateString());

/********************************************************************8 */
let mytimestamp = Date.now
//console.log(mytimestamp());//this given input has output of long millisecond time from starting of date given by vscode 1st january 1970
//console.log(createmydateformat.getTime());
  //so to get the perfect time of the give millisecond is to campare with above mation cretemydateformatso get anther millisecond value comapare this value one another
//console.log(Date.now()/1000);//is always give decimal value so perfect value use math.round
//console.log(Math.round(Date.now()/1000));


 let newDate =new Date
 //console.log(newDate.getMonth());
 //console.log(newDate.getDay());//this get day use for day of the week in local time
 //console.log(newDate.getUTCHours());//this universal time 
 //console.log(newDate.getHours());// this show the  hour of the day  by local time

 //console.log(`Today is date is ${newDate.getDate()}, Now time is ${newDate.getTime()}`);//this string  teqnique sued many time to define updated time in givrn sentence
 
 newDate.toLocaleString(`default`, {
    weekday : "long"
    
 })//this is used for used our format weekday , date, any timezone  
console.log(newDate);
