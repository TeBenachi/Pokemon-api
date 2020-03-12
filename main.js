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

fetch(`${api.base}pokemon/` + setRandomInt(150))
  .then(data => {
    return data.json();
  })
  .then(displayResults);

function displayResults(data) {
  console.log(data);

  // Make the first letter Uppercase 
  let name = document.querySelector("#name");
  name.innerHTML = `${data.name.charAt(0).toUpperCase()}${data.name.slice(1)} `;

  let id = document.querySelector(".id");
  id.innerText = `ID: ${data.id}`;

  let species_name = document.querySelector(".species_name");
  species_name.innerText = `${data.name.charAt(0).toUpperCase()}${data.name.slice(1)} is a species of  `;
  
  let species = document.querySelector(".species");
  species.innerText = `${data.species.name.charAt(0).toUpperCase()}${data.name.slice(1)}`;

  let weight = document.querySelector(".weight");
  weight.innerText = `Weight: ${data.weight} hg`;

  let base_experience = document.querySelector(".experience");
  base_experience.innerText = `Required experience level: ${data.base_experience}`;

  let displayAbilities  = abilities =
  data.abilities.map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)).join(", ");
  console.log(displayAbilities);

  let formattedAbilities = displayAbilities.replace(/-/g, ' ')
  console.log(formattedAbilities);

  let showAbilities = document.querySelector(".abilities");
  showAbilities.innerHTML = `Abilities: ` + formattedAbilities;  

  let poke_pic = document.querySelector(".poke_pic");
  poke_pic.innerHTML = `<img src="${data.sprites.front_default}" class="img-fluid" >`;

}
