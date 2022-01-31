class Animal {
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
}

const objectOne = new Animal(
  "Tiger",
  "Kiara",
  "Africa",
  "Orange",
  "https://cdn.pixabay.com/photo/2016/05/02/12/58/tiger-1367197_960_720.jpg"
);
const objectTwo = new Animal(
  "Svane",
  "Pelle",
  "Norge",
  "Hvit",
  "https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_960_720.jpg"
);
console.log(animalOne);
