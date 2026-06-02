//----------vowel method1-----
// let count=0;
// function countVowels(str){
//    n=str.length;
//    let i=0;
   
//    while(i<n){
// if(str[i]==="a"||str[i]==="e"|| str[i]==="i"||str[i]==="o"||str[i]==="u") {
//  console.log(str[i]);
//  count++;
 
 
// }
// i++;
//    }
   
// };
// console.log(countVowels("apnacollege"));
// console.log(count);


//---------------merhod 2-----------

// function countVowels(str){
//    //n=str.length;
//    let count=0;
//  for(let char of str){
//     if(char==="a"|char==="e"|| char==="i"||char==="o"||char==="u"){
//         count++;
//         console.log(char);
//     }

    
//  }
//    console.log(count);
// };
// countVowels("apnacollege");



//------------------question 2 for each loop-------
//  let arr=[1,2,3,4,5];
//  arr.forEach((val)=>{
//     let s=val*val;
//     console.log(s);
//  })



//-------------------question 3 filter out------
// let arr=[87,23,90,54,93,94,95,96,97];
// let output=arr.filter((val)=>{
//     return val>90;
// })
// console.log(output);


//----------------ques 4 reduce method-------
let n=prompt("enter a number");
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(arr);
let output=arr.reduce((res,cur)=>{
    return res+cur;
})
console.log(output);
let prooutput=arr.reduce((res,cur)=>{
    return res*cur;
})
console.log(prooutput);





// //------method 2-----------
// let n=prompt("enter a number");
// let arr=n.split(",").map(Number);
// console.log(arr);
// let output=arr.reduce((res,cur)=>{
//     return res+cur;
// })
// console.log(output);