const Marval_heros = ["Thor","Captain","Spiderman","Docter"]
const Dc_heros = ["Superman","Batman","Flash" ]

Marval_heros.push(Dc_heros)//in this statement marval_heros is array so its push function make the dc-heros
//  element of the maval_heros so the dc heros is one part of marval heros this not the process to merge the array 
//console.log(Marval_heros);

const allMarval_heros =Marval_heros.concat(Dc_heros)//so this the proper methode of merge the two array
//console.log(allMarval_heros);

//const new_heros =[ ...Marval_heros, ...Dc_heros]//this also the merge teqnique to merge the two or more array
//also this is teqnique is mostly used in the market this is known as spred oprater
//console.log(new_heros);

const newanother_array =[1,2,3,41,2,3,4,[1,2,[4,6]]]//this  flat functio can ramove all the middle brackets get mixed all the element  
const newAnother_array= newanother_array.flat(Infinity)
//console.log(newAnother_array);

console.log(Array.isArray("Pranav"));

console.log(Array.from("Pranav"));//array make to string by making part each character

console.log(Array.from({name:"Pranav"}));//tell before which part has to make us string ex.pranav,name

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //making multple object to mix in single array
