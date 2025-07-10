const coding = ["js","ruby","java","python","CPP"]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10 ]

// const newnums = myNums.filter((num) => num > 4 )
// const newnums = myNums.filter((num) => {
//    return num > 4
// })

// const newnums = []
// myNums.forEach((num)=> {
//     if (num > 4) {
//         newnums.push(num)
        
//     }
// })
// console.log(newnums);

const books = [
    {title: 'book one' , genre: 'fiction' , publish:1981, edition: 2014}, 
    {title: 'book two' , genre: 'non-fiction' , publish:1981, edition: 2006},
    {title: 'book three' , genre: 'history' , publish:2004, edition: 2008},
    {title: 'book four' , genre: 'non-fiction' , publish:1994, edition: 2000},
    {title: 'book five' , genre: 'science' , publish:1986, edition: 2009},
    {title: 'book six' , genre: 'fiction' , publish:1988, edition: 2011},
    {title: 'book seven' , genre: 'history' , publish:2011, edition: 2004},
    {title: 'book eight' , genre: 'science' , publish:1996, edition: 2007},
    {title: 'book nine' , genre: 'non-fiction' , publish:2011, edition: 2003},
];
let userbook =books.filter((bk) => bk.genre ==='history')
console.log(userbook);
 userbook = books.filter((bk) => {return bk.publish >=2000 
    && bk.genre==='history'})
console.log(userbook);
