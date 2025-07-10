const score = 2000

const balance = new Number (300)
//console.log(balance);


//console.log(balance.toString().length);
//console.log(balance.toFixed(2));//this function is used for the to define the length of given number or string

const othernumber = 123.8943
//console.log(othernumber.toPrecision(3)); //this function is used for to round figure the number which is given in point value 

const hundreds=4000000
//console.log(hundreds.toLocaleString('en-IN'));//tolocalstring is used for  indian value define methode


//*****************************Math******************** */

//console.log(Math);
//console.log(Math.abs(-4));//negtiv value should be change in positive value
//console.log(Math.round(4.3));//if we give the under 5 value after point then it will be making before point value its 4 inthe given example
//console.log(Math.round(4.7));//if we give the above 5 vaalue after point then it will be making increse value by 1 then its 5 in the given example 
//it have another example that is ceiling and floor

//console.log(Math.ceil(4.2));//in this case any value is coming after the the point is declered as above value of 4in the given example is answer is 5
//console.log(Math.floor(4.9));//in this case  any value is coming after the point is considerd as below value of the  4 
//console.log(Math.min(4,5,3,8,9));//this is array, in the function is choose the minimum value of the gien array
//console.log(Math.max(7,8,9,10,11));//this is array, in the function is choose the maximum value of the gien arra

//console.log(Math.random());//in the random function it always choose the value between 0.1 to 1

//console.log(Math.random()*10 + 1);//in this function we multiply the random value which always betwwen the 0.1 to 0.9 or 1 
// to give us the perfect value between 1 to 10 value not as 0.1 or 0.3 oor 0.6 like so we multiply the random value with 10
 //if we don't need the valy 0 so also add + 1 after  the multiplication of 10

//console.log (Math.floor((Math.random()*10+1)));//usin math.floor in the random value funtion perfect value

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+ min);// this min max case is behave like dice which is between 1 to 6
