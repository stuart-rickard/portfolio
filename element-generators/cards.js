function appendCards(cardsContainer) {
  // Loop through projectsData to create project cards and append to container element
  for (item of projectsData) {
    const cardSquare = document.createElement("div");
    cardSquare.className = "card-square";

    const projectTitle = document.createElement("div");
    projectTitle.className = "project-title";
    projectTitle.textContent = item.title;
    cardSquare.appendChild(projectTitle);

    const blurb = document.createElement("div");
    blurb.className = "blurb";
    blurb.textContent = item.blurb;
    cardSquare.appendChild(blurb);

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots-container";

    // loop through the categories of each item to create dots and append to dotsContainer
    item.categories.forEach((category) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.backgroundColor = colors[categories.indexOf(category)];
      dotsContainer.appendChild(dot);
    });
    cardSquare.appendChild(dotsContainer);

    cardSquare.dataset.dataIndex = projectsData.indexOf(item);

    cardsContainer.appendChild(cardSquare);
  }

  const cardSquares = document.querySelectorAll(".card-square");
  cardSquares.forEach((cardSquare) => {
    cardSquare.addEventListener("click", showModal);
  });
}
