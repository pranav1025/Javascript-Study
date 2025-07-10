// arrays

const myArray = [1,2,3,4,5,6,6,8]// Arrays always declare in [] square brackets
                                  // in array single harcter is called as elment
                                  //arrays element are also different if we needed single array number,string,character,boolean
                                  //javascript arrays are resizable
const myHeros = ['Shaktiman','Spiderman','Superman'] 

const myArray2 = new Array(1,2,3,4,5)
//console.log(myArray);
//console.log(myArray2);
//console.log(myHeros);

//Array methods

//myArray.push(6)// push used to add element last  in  array 
//myArray.push(7)
//myArray.pop()//pop is used to remove last element of the array 

//myArray.unshift(0)//unshift is used for to add element in array on  first position 
//myArray.unshift(3)//unshift is used for to add element in array on  first position
//myArray.shift()   //Shift is used for to remove element in array on first position
//myArray.shift()  //Shift is used for to remove element in array on first position

//console.log(myArray);//

//console.log(myArray.includes(11));//this helps to find the given element is avilable in array or not givs answer in boolean vlause true or false 
//console.log(myArray.indexOf(2));//indexof is find the element in array and gives the postion number  of given element in array

//const newArray =myArray.join() //using this teqnique we coverted the array into string
//console.log(typeof newArray);
//console.log(myArray);

//slice and splice

console.log("A" ,  myArray);
const myn1=myArray.slice(1,3)//in the slice the array is show us given number position into
//output but also show next full array 
console.log(myn1);

console.log("B",myArray);


const myn2 = myArray.splice(1,3)//in the splice the array show us the given number position with cutdown the array with given position number
//and show the remaining array and also in splice it also take the second given position number in slice it dont take second position number value 

console.log(myn2);
console.log("B",myArray);

