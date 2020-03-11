const api = {
  base: "https://pokeapi.co/api/v2/",
};

// const button = document.querySelector("button");

// button.addEventListener("click", event => {
//   let randomNum = document.querySelector(".pokeID");
//   button.innerHTML = `Pokemon ID: ` + setRandomInt(20);
// });

function setRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(setRandomInt(20));

fetch(`${api.base}pokemon/` + setRandomInt(20))
  .then(data => {
    return data.json();
  })
  .then(displayResults);

function displayResults(data) {
  console.log(data);

  let name = document.querySelector(".name");
  name.innerHTML = `${data.name}`;

  let id = document.querySelector(".id");
  id.innerText = `ID: ${data.id}`;

  let species = document.querySelector(".species");
  species.innerText = `${data.species.name}`;

  let base_experience = document.querySelector(".experience");
  base_experience.innerText = `Required experience level: ${data.base_experience}`;

  let abilities = document.querySelector(".abilities");
  abilities.innerText = `Abilities: ${data.abilities[0].ability.name}`;

  let poke_pic = document.querySelector(".poke_pic");
  poke_pic.innerHTML = `<img src="${data.sprites.front_default}" class="img-fluid" >`;

  
}
