// Get elements from DOM
const button = document.querySelector(".btn");
const div = document.querySelector("div");
let container = document.querySelector(".container");

let num = "";

button.addEventListener("click", function(){

 num = prompt("How big would you like the grid to be?");

 // clear previous grid
 container.innerHTML = "";
 
 // Create cells for number indicated by user
 
 for (let i = 1; i<=num*num; i++){
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class","ndiv");
  newDiv.textContent = i;
  container.appendChild(newDiv);
}

});

// Add hover affect, by adding a hover class

const gridDivs = document.querySelectorAll(".ndiv");
Array.from(gridDivs).forEach(item => item.addEventListener("mouseover",function(){
  item.classList.add("hover");
}))

/*div.childNodes.forEach(item => item.addEventListener("onmouseover",function (){
 item.style.backgroundColor = "yellow";
}));*/






