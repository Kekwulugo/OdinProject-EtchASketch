const button = document.querySelector(".btn");
const div = document.querySelector("div");

let num = "";

button.addEventListener("click", function(){

 num = prompt("How big would like the grid to be?");
 
 let container = document.querySelector(".container");
 
 for (let i = 1; i<=num*num; i++){
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class","ndiv");
  newDiv.textContent = i;
  container.appendChild(newDiv);
}

});

//not working

div.childNodes.forEach(item => item.addEventListener("onmouseover",function (){
 item.style.backgroundColor = "yellow";
}));




