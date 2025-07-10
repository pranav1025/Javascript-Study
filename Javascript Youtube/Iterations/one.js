//fpr loop 

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is found");
        
        
    }
    //console.log(element);
}

for (let i = 1; i <=10 ; i++) {
    //console.log(`outer loop value: ${i}`);
    
  for (let j = 1; j <=10; j++) {
     //console.log(`inner loop value: ${j} and inner loop ${i}`);
    //console.log(i + "*" + j  + "=" + i * j);
    
    
}
}

let myarray =[1,2,3,4,5]
//console.log(myarray.length);

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    //console.log(element);
    
}

//break and continue

// for (let i = 0; i <=20; i++) { 
//     if(i==5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`vlaue of i is ${i}`);
    
    
// }
for (let i = 0; i <=20; i++) { 
    if(i==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`vlaue of i is ${i}`);
    
    
}