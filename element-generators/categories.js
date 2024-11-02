// Array of colors for the dots
const colors = [
  "SteelBlue",
  "orange",
  "green",
  "blue",
  "brown",
  "magenta",
  "olive",
  "purple",
  "red",
  "MediumSeaGreen",
  "Goldenrod",
  "Coral",
  "MediumSlateBlue",
  "Tomato",
  "DarkKhaki",
  "SkyBlue",
  "SpringGreen",
  "SandyBrown",
];

// Array of categories from projectsData
const categories = [
  ...new Set(
    projectsData.reduce((acc, item) => {
      return [...acc, ...item.categories];
    }, [])
  ),
];

function appendLegendItems(legend) {
  // Loop through the categories to create legend items and append to legend element
  for (item of categories) {
    const legendItem = document.createElement("div");
    legendItem.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.backgroundColor = colors[categories.indexOf(item)];

    const label = document.createElement("span");
    label.textContent = item;
    label.style.color = colors[categories.indexOf(item)];

    legendItem.appendChild(dot);
    legendItem.appendChild(label);

    // Add click listener to log the color of the legendItem
    legendItem.addEventListener("click", reorderCards);

    legend.appendChild(legendItem);
  }
}
