"use strict";

const btn = document.querySelector(".btn");
const koktelih1 = document.querySelector(".kokteli");
const search = document.querySelector(".search");
const sviKokteli = document.querySelector(".svi-kokteli");
const listaKoktela = document.querySelector(".lista-koktela");

const renderKoktel = function (koktel) {
  for (let i = 0; i < koktel.length; i++) {
    const alo = koktel[i];
    const jbg = Object.keys(alo)
      .filter((key) => key.includes("strIngredient") && alo[key] != null)
      .map((key) => " " + alo[key]);

    console.log(koktel);
    const html = `
    <div class="rezultati">
    <h2 class="naslov">Cocktail No ${i + 1}: ${koktel[i].strDrink}</h2>
    <img src="${koktel[i].strDrinkThumb}" alt="" class="slika" />
    <div class="vrsta">
    <h3 class="alcoholic ${
      koktel[i].strAlcoholic === "Alcoholic" ? "alcohol" : "optional-alcohol"
    }">${koktel[i].strAlcoholic}</h3>
    <h3 class="kategorija">Category: ${koktel[i].strCategory}</h3>
    <h3 class="glass">Glass: ${koktel[i].strGlass}</h3>
    </div>
    <h4 class="sastojci">Ingredients: ${`<p class="sastojci-svi">${jbg}</p>`}</h4>
    <h4 class="instrukcije">Instuctions: ${koktel[i].strInstructions}</h4>
    </div>
    `;
    sviKokteli.insertAdjacentHTML("beforeend", html);
  }
};

const data = function (koktel) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${koktel}`)
    .then((response) => response.json())
    .then((data) => renderKoktel(data.drinks));
};

btn.addEventListener("click", function (e) {
  sviKokteli.innerHTML = "";
  data(search.value);
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sviKokteli.innerHTML = "";
    data(search.value);
  }
});

const alcoholColor = function () {
  const alcoholColorClass = document.querySelectorAll(".alcoholic");

  if (koktel[i].strAlcoholic === "Alcoholic") {
    alcoholColorClass.forEach((a) => a.classList.add(".none-alcohol"));
  }
};
