"use strict"

// let rightIcon=document.querySelector(".slider-area .slider .icons i:nth-child(2)")
// let leftIcon=document.querySelector(".slider-area .slider .icons i:nth-child(1)")


// function rightSlider(){
//     let activeSlider=document.querySelector(".active-slider")
//     if(activeSlider.nextElementSibling!=null){
//         activeSlider.classList.remove("active-slider")
//         activeSlider.nextElementSibling.classList.add("active-slider")
//     }else{
//         activeSlider.classList.remove("active-slider")
//         activeSlider.parentNode.firstElementChild.classList.add("active-slider")
//     }
// }



// function leftSlider(){

//     let activeSlider=document.querySelector(".active-slider")
//     if(activeSlider.previousElementSibling!=null){
//         activeSlider.classList.remove("active-slider")
//         activeSlider.previousElementSibling.classList.add("active-slider")
//     }else{
//         activeSlider.classList.remove("active-slider")
//         activeSlider.parentNode.lastElementChild.classList.add("active-slider")
//     }

// }
// rightIcon.addEventListener("click", rightSlider)
// leftIcon.addEventListener("click", leftSlider)
   
// setInterval(() => {
//     rightSlider();
// }, 800);


// let a=document.querySelector("a");

// a.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(e.target.innerText);
// })

// let fileInput =document.querySelector("input");

// fileInput.addEventListener("click",function(e){
//     console.log(e);
// })

// let dragElem=document.getElementById("drag-elem");
// let dropElem=document.getElementById("drop-elem");


// dragElem.ondragstart=(e)=>{
//     let id=e.target.getAttribute("id");
//     e.dataTransfer.setData("id",id);
// }


// dropElem.ondragover=(e)=>{
//     e.preventDefault();
// }


// dropElem.ondrop=(e)=>{
//     e.target.append(document.getElementById(e.dataTransfer.getData("id")))
// }