const api = {
  base: "https://pokeapi.co/api/v2/",
  id: 1
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

fetch(`${api.base}ability/` + setRandomInt(20))
  .then(data => {
    return data.json();
  })
  .then(displayResults);

function displayResults(data) {
  console.log(data);

  let id = document.querySelector(".id");
  id.innerText = `ID: ${data.id}`;

  let name = document.querySelector(".name");
  name.innerText = `Name: ${data.name}`;

  let moves = document.querySelector(".moves");
  moves.innerText = `Other Names: ${data.names}`;
}
