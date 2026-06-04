// console.log(window);
// alert("hello");
// window.console.log("sharma")
// console.dir(document);
// console.dir(document.body.childNodes[1])
// console.log(document.body);
//  document.body.style.background="green";



//-----------------------#Id-------------------
// let button=document.getElementById("myId");
//  console.log(button);
//  console.dir(button); 



//---------------------".class"------------
//  let headings=document.getElementsByClassName("heading-class");
// console.dir(headings); 
// console.log(headings)


//-----------------------Tag-------------------S
// let para=document.getElementsByTagName("p");
// console.dir(para);



//----------query selector----------
// let q=document.querySelector("p")
// console.dir(q);

// let q=document.querySelectorAll("p")
// console.dir(q);

// let q=document.querySelectorAll(".heading-class")
// console.dir(q);




//-----------------properties-----------------
// let q=document.querySelector("p")
// console.dir(q);
// console.log(q.tagName);

// let div=document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML)

// div.innerText="abcd";
// let heading=document.querySelector("h1");
//console.dir("heading");
// heading.innerHTML="<b>aman</b>"
// console.log(heading.innerText);







//----------------------question 1-----------------

//===============method 1=============
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
//  h2.innerText=h2.innerText+"from apna college students";


// //=====method 2==============
//  let k=h2.innerText;
//  let m="from apna colleges students";
// h2.innerText=k.concat(m);



//------------------------question 2----------------

//=================method1===============
// // let divs=document.querySelectorAll(".box");
// console.dir(divs);
// divs[0].innerText="new value 1";
// divs[1].innerText="new value 2";
// divs[2].innerText="new value 3";

//==================method 2===========
// let divs=document.querySelectorAll(".box");
// let idx=1;
// for (k of divs){
//     k.innerText=`new unique value ${idx}`;
//     idx++;
// }
