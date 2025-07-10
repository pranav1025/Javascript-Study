const myNums = [1,2,3]
// const mytotal =myNums.reduce(function (acc,curvalue){
//     console.log(`acc: ${acc} and curvalue: ${curvalue}`);
    
//     return acc + curvalue
// },0)
const mytotal = myNums.reduce( (acc,curvalue)=>acc+curvalue,0 )
console.log(mytotal);
