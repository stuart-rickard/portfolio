const modal = document.getElementById("modal");

const legend = document.getElementById("legend");

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

const container = document.getElementById("cards-container");

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

  container.appendChild(square);
}

function showModal(event) {
  const dataIndex = event.currentTarget.dataset.dataIndex;
  const modalText = document.getElementById("modal-title");
  modalText.innerText = projectsData[dataIndex].title;

  const modalDescription = document.getElementById("modal-description");
  modalDescription.innerText = projectsData[dataIndex].description;

  const modalLinks = document.getElementById("modal-links");

  if (projectsData[dataIndex].link) {
    const link = document.createElement("a");
    link.innerText = projectsData[dataIndex].link[0];
    link.setAttribute("href", projectsData[dataIndex].link[1]);
    link.setAttribute("target", "_blank");
    modalLinks.appendChild(link);
  }
  if (projectsData[dataIndex].gitHubUrl) {
    const gitHubLink = document.createElement("a");
    gitHubLink.innerHTML = '<i class="fab fa-github black-icon"></i>';
    gitHubLink.setAttribute("href", projectsData[dataIndex].gitHubUrl);
    gitHubLink.setAttribute("target", "_blank");
    gitHubLink.style.display = "block";
    modalLinks.appendChild(gitHubLink);
  }

  modal.style.display = "block";
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Also close the modal if user clicks anywhere outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

document.addEventListener("DOMContentLoaded", (event) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", showModal);
  });
});
