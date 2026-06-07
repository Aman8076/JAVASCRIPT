// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }
// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=()=>{
//     console.log("button was clicked 2x time");
// }


// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("mouse is over the box");
// }





//----------------------Event Object-----------------------
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log("btn1 is clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY)
// }





//----------------------Event Listner------------------

//================Add================
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler 1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler 2");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler 3");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler 4");
// }); 

// //===================remove==============
// let handler3=()=>{
//      console.log("button was clicked-handler 3");
//  };
//  btn1.addEventListener("click",handler3);

// btn1.removeEventListener("click",handler3);











//-----------------------question 1---------------------
let mode=document.querySelector("#mode");
let currMode="light";
mode.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.textEmphasisColor="red";
    } else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.textEmphasisColor="black";
    }
    console.log(currMode);
})