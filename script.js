// Get elements from DOM
let button = document.querySelector(".btn");
let container = document.querySelector(".container");


let num = "";
function createGrid () {

  
  num = prompt("Please indicate the dimensions of the grid - ? X ?")

  container.innerHTML = "";
  container.style.width = "960px";
  container.style.border = "1px solid black";


  //determine size of cells
  let size = 960/num;
  

// create cells
  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class","ndiv");
      newDiv.style.width = size + "px";
      newDiv.style.height = size + "px";
      container.appendChild(newDiv);


      //setup event listener for cells
      newDiv.addEventListener("mouseover",() => {
      randomColor = Math.floor(Math.random()*16777215).toString(16);
      newDiv.style.backgroundColor = "#" + randomColor;
        

      
  })

    }
  }
  
};


// user clicks button to generate grid
button.onclick = createGrid;








