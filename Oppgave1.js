class Animal {
  // Dette er classenavnet til konstruksjonen. Class er en template for javascript objekter.
  constructor(species, name, country, color, imgUrl) {
    // Her legger man inn det man skal ha med av informasjon. Constructor metoden blir kalt på automatisk når et nytt objekt blir lagd.
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
}

function feedAnimal() {
  document.getElementById("btn");
  alert(`${objectOne.name} is now eating!`);
}

function feedAnimal2() {
  document.getElementById("btn-2");
  alert(`${objectTwo.name} is now eating!`);
}

const objectOne = new Animal( // Dette er det første objektet i classen.
  "Tiger",
  "Kiara",
  "Africa",
  "Orange",
  "<img src = https://cdn.pixabay.com/photo/2016/05/02/12/58/tiger-1367197_960_720.jpg>"
);
const objectTwo = new Animal( // Dette er det andre objektet i classen.
  "Svane",
  "Pelle",
  "Norge",
  "Hvit",
  "<img src = https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_960_720.jpg>"
);
console.log(objectOne, objectTwo);

let species = document.getElementById("species-container");
let color = document.getElementById("color-container");
let image = document.getElementById("img");
let container = document.getElementById("card1");

species.innerHTML = objectOne.species;
color.innerHTML = `Color: ${objectOne.color}`;
image.innerHTML = objectOne.imgUrl;

let speciesTwo = document.getElementById("species-container_");
let colorTwo = document.getElementById("color-container_");
let imageTwo = document.getElementById("img_");
let containerTwo = document.getElementById("card2");

speciesTwo.innerHTML = objectTwo.species;
colorTwo.innerHTML = `Color: ${objectTwo.color}`;
imageTwo.innerHTML = objectTwo.imgUrl;
