// Get elements from DOM
let button = document.querySelector(".btn");
let container = document.querySelector(".container");

let num = "";

function createGrid () {

  
  num = prompt("Please indicate the dimensions of the grid - ? X ?")

  //container.style.border = "1px solid black";
  container.innerHTML = "";
  container.style.width= "960px";


  //determine size of cells
  let size = 960/num;
  

// create cells
  for (let i = 1; i<=num*num; i++){
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class","ndiv");
  newDiv.style.width = size + "px";
  newDiv.style.height = size + "px";
  //newDiv.style.border = "1px solid black";
  

  //setup event listener for cells
  newDiv.addEventListener("mouseover",() => {
    newDiv.classList.add("hover");
  })


  container.appendChild(newDiv);

};
}

// user clicks button to generate grid
button.onclick = createGrid;








