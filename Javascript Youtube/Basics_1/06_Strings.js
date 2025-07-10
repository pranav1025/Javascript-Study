 const name = "Pranav"
 repocount =  20 
 //console.log(name + repocount +" value");// This type of string tequnique is old so used new type of teqnque

 console.log( `My name is ${name} and my repocount is ${repocount}`);//this is new teqnque of define the string

 const gamename= new String ('pranav-pp')
 console.log(gamename[0]);
 console.log(gamename [3]);
 console.log(gamename.toUpperCase());
 console.log(gamename.__proto__);
 console.log(gamename.charAt(2));//it helps to know which character at on given position number 
 console.log(gamename.indexOf('n'));//it  helps to know the position of givan character 
 console.log(gamename.length);//the length function is used for to known the length of the given string

 const newstring = gamename.substring(0 , 5)//the function is to help the divide the string into the substring as small string
 console.log(newstring);

 const anotherstring=gamename.slice(0,3)//in to the slice function the string get cut from both side if we need the from backside of string
 //  we gave the firstvalue of bracket negative postion of last character string
 //console.log(anotherstring);
 
 const newstringone="   pranav   "
 console.log(newstringone);//this is normal  output of the string 
 console.log(newstringone.trim());//this trim function is remove the space which is given before or after of the string 
 
 
 const url="Pranavpatil.com"
console.log(url.replace('.','-'));//this replace the the given character or sumbol wit another given symboll or object  
console.log(url.includes('patil'));//this include functin can find given char,word,symbol is availble or not in string give answer in true or false 
console.log(url.split('i'));//form the given character is spllit into array


 
 
 
 
 
 
 

 
 