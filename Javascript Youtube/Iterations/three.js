//for of

["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
    
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('USA','United states of America')
map.set('FR','France')
//console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myobject ={
    game1: 'NFS',
    game2: 'PUBG'

}
// for (const [key,value] of myobject) {
//  console.log(key,':-',value);
// }