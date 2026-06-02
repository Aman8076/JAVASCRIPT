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

function countVowels(str){
   //n=str.length;
   let count=0;
 for(let char of str){
    if(char==="a"|char==="e"|| char==="i"||char==="o"||char==="u"){
        count++;
        console.log(char);
    }

    
 }
   console.log(count);
};
countVowels("apnacollege");
