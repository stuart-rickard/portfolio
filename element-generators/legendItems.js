// Array of colors for the dots
const colors = [
  "SteelBlue",
  "purple",
  "green",
  "blue",
  "red",
  "olive",
  "magenta",
  "Goldenrod",
  "gray",
  "SkyBlue",
  "brown",
  // "SandyBrown",
  // "orange",
  // "MediumSeaGreen",
  // "Coral",
  // "MediumSlateBlue",
  // "Tomato",
  // "DarkKhaki",
  // "SpringGreen",
];

// Array of categories from projectsData
const categories = [
  ...new Set(
    projectsData.reduce((acc, item) => {
      return [...acc, ...item.categories];
    }, [])
  ),
];

function prepareLegendItems(legendItems) {
  // Loop through the categories to create legend items and append to legend element
  for (item of categories) {
    const legendItem = document.createElement("div");
    legendItem.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.backgroundColor = colors[categories.indexOf(item)] || "black";
    dot.textContent = item.charAt(0).toUpperCase();

    const label = document.createElement("span");
    label.textContent = item;
    label.style.color = colors[categories.indexOf(item)];

    legendItem.appendChild(dot);
    legendItem.appendChild(label);

    // Add click listener to log the color of the legendItem
    legendItem.addEventListener("click", reorderCards);

    legendItems[item] = { item: legendItem, dot: dot };
  }
}

function appendLegendItems(legend, legendItems) {
  for (const key in legendItems) {
    legend.appendChild(legendItems[key].item);
  }
}
