const pizzaBase = document.getElementById("pizza");
const baseContainer = document.querySelector(".base-container");
const ingredientsContainer = document.querySelector(".ingredients-container");

function updateCrustVisual(crustStyle) {
    const crustVisual = document.getElementById("crust-visual");
    crustVisual.className = crustStyle;
}

const pizzaBases = ["Thin Crust", "Thick Crust"];
const toppingTypes = ["Onions", "Pepperonis", "Olives", 'Basil'];
const toppingImg = ["https://static.vecteezy.com/system/resources/previews/001/992/951/non_2x/fresh-onion-healthy-vegetable-icon-free-vector.jpg", "https://www.thespruceeats.com/thmb/DM4rZiaAGNEV5M4TSfC2NRK0nNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-pepperoni-5077654-still-life-05c26ca198f045579181b7e680d4cf58.jpg", "https://homegrownhappiness.com/wp-content/uploads/2020/05/olives-1-720x720.jpg", 'https://mybageecha.com/cdn/shop/products/BASILCLASSICITALIAN_1024x.jpg?v=1595658733'];

const container = document.getElementById('base-container');

pizzaBases.forEach(base => {
    const baseElement = document.createElement("div");

    baseElement.className = "ingredients";
    baseElement.innerText = base;
    if (base === "Thin Crust") {
        baseElement.style.background = "#d7a95c"
    } else {
        baseElement.style.background = "#b6623b"

    }
    baseElement.draggable = true;
    baseElement.addEventListener("dragstart", dragStart);
    baseContainer.appendChild(baseElement);

});

toppingTypes.forEach(topping => {
    const toppingElement = document.createElement("div");
    const toppingText = document.createElement("p");
    const toppingImgElement = document.createElement("img");
    toppingElement.className = "item";
    toppingText.innerText = topping;
    toppingImgElement.src = toppingImg[toppingTypes.indexOf(topping)];
    toppingImgElement.alt = topping;
    toppingElement.draggable = true;
    toppingElement.addEventListener("dragstart", dragStart);
    toppingElement.append(toppingImgElement,toppingText);
    ingredientsContainer.appendChild(toppingElement);
    ingredientsContainer.style.display = 'none';
});

function dragStart(event) {
    if(event.target.innerText){
        event.dataTransfer.setData("text/plain", event.target.innerText);
    }else{
        event.dataTransfer.setData("text/plain", event.target.alt);
    }
    
}

pizzaBase.addEventListener("dragover", allowDrop);
pizzaBase.addEventListener("drop", handleDrop);

function allowDrop(event) {
    event.preventDefault();
}


function handleDrop(event) {
    event.preventDefault();
    const ingredientName = event.dataTransfer.getData("text/plain");

    if (ingredientName === "Thin Crust") {
        updateCrustVisual("pizza-thin-crust");
        baseContainer.style.display = 'none';
        ingredientsContainer.style.display = 'flex';

    } else if (ingredientName === "Thick Crust") {
        updateCrustVisual("pizza-thick-crust");
        baseContainer.style.display = 'none';
        ingredientsContainer.style.display = 'flex';
    }
    else if (ingredientName === "Onions") {
        document.getElementById("onions").className = "onions";
    }
    else if (ingredientName === "Olives") {
        document.getElementById("olives").className = "olives";
    }
    else if (ingredientName === "Pepperonis") {
        document.getElementById("pepperonis").className = "pepperonis";
    }
    else if (ingredientName === "Basil") {
        document.getElementById("basil").className = "basil";
    }

}
