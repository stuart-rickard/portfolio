const header = document.getElementById("header");
const spacer = document.getElementById("spacer");

const modal = document.getElementById("modal");
// modal is shown when a card is clicked (showModal function)

const legend = document.getElementById("legend");

appendLegendItems(legend);

const cardsContainer = document.getElementById("cards-container");

appendCards(cardsContainer);

document.addEventListener("DOMContentLoaded", function () {
  adjustSpacerHeight(header, spacer);
});
