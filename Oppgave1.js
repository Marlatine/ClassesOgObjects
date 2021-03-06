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
  let userAnswer = prompt(`Hva vil du mate dyret med?`);
  alert(`${objectOne.name} is now eating a portion of ${userAnswer}`);
}

function feedAnimal2() {
  document.getElementById("btn-2");
  let userAnswer = prompt(`Hva vil du mate dyret med?`);
  alert(`${objectTwo.name} is now eating a portion of ${userAnswer}!`);
}

const objectOne = new Animal( // Dette er det første objektet i classen.
  "Tiger",
  "Kiara",
  "Africa",
  "Orange",
  "<img src = https://cdn.pixabay.com/photo/2018/05/23/18/54/tiger-3424791_960_720.jpg>"
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
