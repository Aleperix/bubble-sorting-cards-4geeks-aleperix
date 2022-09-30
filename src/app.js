/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["&#9824;", "&#9829;", "&#9827;", "&#9830;"];
const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let cards = document.querySelector("#cardsContainer");
let btnGenerate = document.querySelector("#generateCards");
let btnSort = document.querySelector("#sortCards");
let cardQuantity = document.querySelector("#cardQuantity");
let generatedCards;
let sortedCards;

//Generamos las cartas dependiendo de la cantidad que introduzca el usuario.
btnGenerate.addEventListener("click", function() {
  generatedCards = new Array();
  cards.innerHTML = "";
  for (let i = 0; i < cardQuantity.value; i++) {
    let card = newCard();
    cards.innerHTML += card[0];
    generatedCards.push([card[0], card[1]]);
  }
});

//Ordenamos las cartas generadas anteriormente usando el método burbuja de la funcion bubbleSort()
btnSort.addEventListener("click", function() {
  sortedCards = new Array();
  sortedCards = bubbleSort(generatedCards);
  cards.innerHTML = "";
  for (let i = 0; i < sortedCards.length; i++) {
    cards.innerHTML += sortedCards[i][0];
  }
});

//Función que crea una carta aleatoria dependiendo de una estructura HTML dada.
function newCard() {
  let cardNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let cardSuit = suits[Math.floor(Math.random() * suits.length)];
  let random_boolean = Math.random() < 0.5;

  let structure = '<div class="card m-3" style="width: 12rem; height: 18rem;">';
  structure += '<div class="card-body">';
  if (random_boolean) {
    structure +=
      '<div class="cardSuitTop card-text h-25 text-danger"><h1 class="display-5 fw-bold">' +
      cardSuit +
      "</h1></div>";
    structure +=
      '<div class="cardNumber card-text row align-items-center text-center text-danger h-50"><h1 class="display-1 fw-bold">' +
      cardNumber +
      "</h1></div>";
    structure +=
      '<div class="cardSuitBottom card-text h-25 d-flex justify-content-end text-danger"><h1 class="display-5 fw-bold">' +
      cardSuit +
      "</h1></div>";
  } else {
    structure +=
      '<div class="cardSuitTop card-text h-25"><h1 class="display-5 fw-bold">' +
      cardSuit +
      "</h1></div>";
    structure +=
      '<div class="cardNumber card-text row align-items-center text-center h-50"><h1 class="display-1 fw-bold">' +
      cardNumber +
      "</h1></div>";
    structure +=
      '<div class="cardSuitBottom card-text h-25 d-flex justify-content-end"><h1 class="display-5 fw-bold">' +
      cardSuit +
      "</h1></div>";
  }
  structure += "</div></div>";

  return [structure, cardNumber];
}

//Una función de ordenamiento de burbuja simple
const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      let temp = arr[index][1];
      let temp1 = arr[index + 1][1];
      if (temp == "A") {
        temp = 1;
      } else if (temp == "J") {
        temp = 11;
      } else if (temp == "Q") {
        temp = 12;
      } else if (temp == "K") {
        temp = 13;
      }
      if (temp1 == "A") {
        temp1 = 1;
      } else if (temp1 == "J") {
        temp1 = 11;
      } else if (temp1 == "Q") {
        temp1 = 12;
      } else if (temp1 == "K") {
        temp1 = 13;
      }
      if (temp > temp1) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  return arr;
};
