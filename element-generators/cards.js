function appendCards(cardsContainter) {
  // Loop through projectsData to create project cards and append to container element
  for (item of projectsData) {
    const square = document.createElement("div");
    square.className = "square";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project-title";
    projectTitle.textContent = item.title;
    square.appendChild(projectTitle);

    const paragraph = document.createElement("p");
    paragraph.className = "blurb";
    paragraph.textContent = item.blurb;
    square.appendChild(paragraph);

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots-container";

    // loop through the categories of each item to create dots and append to dotsContainer
    item.categories.forEach((category) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.backgroundColor = colors[categories.indexOf(category)];
      dotsContainer.appendChild(dot);
    });
    square.appendChild(dotsContainer);

    square.dataset.dataIndex = projectsData.indexOf(item);

    cardsContainer.appendChild(square);
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", showModal);
    });
  });
}
