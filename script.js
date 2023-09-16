const pizzaBase = document.getElementById("pizza");
const baseContainer = document.querySelector(".base-container");
const ingredientsContainer = document.querySelector(".ingredients-container");

// Function to update crust visuals
function updateCrustVisual(crustStyle) {
    const crustVisual = document.getElementById("crust-visual");
    crustVisual.className = crustStyle;
}

// Load available pizza bases and ingredients dynamically
const pizzaBases = ["Thin Crust", "Thick Crust"];
const toppingTypes = ["Onions", "Pepperonis", "Olives", 'Basil'];

const container = document.getElementById('base-container');

// Add pizza bases to the ingredients section
pizzaBases.forEach(base => {
    const baseElement = document.createElement("div");
    
    baseElement.className = "ingredients";
    baseElement.innerText = base;
    baseElement.draggable = true;
    baseElement.addEventListener("dragstart", dragStart);
    baseContainer.appendChild(baseElement);

});

// Add topping ingredients to the ingredients section
toppingTypes.forEach(topping => {
    const toppingElement = document.createElement("div");
    toppingElement.className = "item";
    toppingElement.innerText = topping;
    toppingElement.draggable = true;
    toppingElement.addEventListener("dragstart", dragStart);
    ingredientsContainer.appendChild(toppingElement);
    ingredientsContainer.style.display = 'none';
});

// Implement drag-and-drop functionality
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerText);
}

// Update the pizza image when ingredients are dropped
pizzaBase.addEventListener("dragover", allowDrop);
pizzaBase.addEventListener("drop", handleDrop);

function allowDrop(event) {
    event.preventDefault();
}



function handleDrop(event) {
    event.preventDefault();
    const ingredientName = event.dataTransfer.getData("text/plain");

    if(ingredientName === "Thin Crust") {
        updateCrustVisual("pizza-thin-crust");
        baseContainer.style.display = 'none';
        ingredientsContainer.style.display = 'block';   
        
    } else if (ingredientName === "Thick Crust") {
        updateCrustVisual("pizza-thick-crust");
        baseContainer.style.display = 'none';
        ingredientsContainer.style.display = 'block';   
    }
    else if(ingredientName === "Onions") {
       document.getElementById("onions").className = "onions";
    }
    else if(ingredientName === "Olives") {
        document.getElementById("olives").className = "olives";
    }
    else if(ingredientName === "Pepperonis") {
        document.getElementById("pepperonis").className = "pepperonis";
    }
    else if(ingredientName === "Basil") {
        document.getElementById("basil").className = "basil";
    }
    
}
