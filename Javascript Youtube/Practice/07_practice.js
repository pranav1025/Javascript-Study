//array
const arr =[1,2,3,4,5,6,7,8,9,0]

const heros = ["batman","spiderman","bheem"]
const arr1 = new Array(1,2,4,5,6,9)
//console.log(arr1[4]);
// //
// arr1.push(0)
// console.log(arr1);
// arr1.pop(0)
// console.log(arr1);
// arr1.unshift(0)
// console.log(arr1);
// arr1.shift(0)
// console.log(arr1);

// console.log(arr.includes(6));
// console.log(arr.indexOf(4));

// const newarr = arr.join()
// console.log(arr);
// console.log(typeof newarr);

//slie,,splice
// console.log("A",arr);
// const mynew =arr.slice(1,4)
// console.log(mynew);

// const myew = arr.splice(1,4)
// console.log("b",arr);
// console.log(myew);

//
const marvelheros =["thor","captain america","spiderman"]
const dc_heros = [ "superman","falsh","batman"]

//marvelheros.push(dc_heros)

//console.log(marvelheros);
// const heros1 =marvelheros.concat(dc_heros)
// console.log(heros1);

const heros1=[...marvelheros,...dc_heros]
console.log(heros1);

const anotherarray = [1,2,3,[4,5,6],7,8,[9,0,[11,12]]]
const anotherarray1 = anotherarray.flat(Infinity)
console.log(anotherarray1);


console.log(Array.isArray("pranav"))
console.log(Array.from("pranav"));

let arrr1 =100
let arrr2 =200
let arrr3 =300
console.log(Array.of(arrr1,arrr2,arrr3));














