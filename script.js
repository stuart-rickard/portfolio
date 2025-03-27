const header = document.getElementById("header");
const spacer = document.getElementById("spacer");

const modal = document.getElementById("modal");
// modal is shown when a card is clicked (showModal function)

let legendItems = {};
prepareLegendItems(legendItems);

const legend = document.getElementById("legend");
appendLegendItems(legend, legendItems);

const cardsContainer = document.getElementById("cards-container");
appendCards(cardsContainer, legendItems);

document.addEventListener("DOMContentLoaded", function () {
  adjustSpacerHeight(header, spacer);
});
