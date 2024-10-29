function showModal(event) {
  const dataIndex = event.currentTarget.dataset.dataIndex;
  const modalText = document.getElementById("modal-title");
  modalText.innerText = projectsData[dataIndex].title;

  const modalDescription = document.getElementById("modal-description");
  modalDescription.innerText = projectsData[dataIndex].description;

  const modalLinks = document.getElementById("modal-links");

  while (modalLinks.firstChild) {
    modalLinks.removeChild(modalLinks.firstChild); // remove any existing links
  }

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
