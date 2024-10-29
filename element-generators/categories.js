// Array of colors for the dots
const colors = [
  "orange",
  "green",
  "blue",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "teal",
  "indigo",
  "lime",
  "olive",
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

    legend.appendChild(legendItem);
  }
}
