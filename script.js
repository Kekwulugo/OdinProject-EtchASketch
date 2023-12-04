let num = prompt("How big would like the grid to be?");

let container = document.querySelector(".container");

// create grid based on user input

for (let i = 1; i<=num; i++){
 let newDiv = document.createElement("div");
 newDiv.setAttribute("class","new-div");
 newDiv.textContent = i;
 container.appendChild(newDiv);
}

let gridItem = document.querySelectorAll(".new-div");

//event listener for mouse hover
gridItem.addEventListener("click", function(){
 gridItem.style.backgroundColor = "red";
});




