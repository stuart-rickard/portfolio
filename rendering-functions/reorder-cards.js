function reorderCards() {
  const container = document.querySelector("#cards-container");
  const items = Array.from(container.children);

  // Record initial positions
  const initialPositions = new Map();
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    initialPositions.set(item, rect);
  });

  const sortedItems = items.sort(() => Math.random() - 0.5);

  // Rearrange the items in the DOM
  sortedItems.forEach((item) => {
    container.appendChild(item);
  });

  // Force reflow
  container.offsetHeight;

  // Record final positions
  const finalPositions = new Map();
  sortedItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    finalPositions.set(item, rect);
  });

  // Apply transforms to animate
  sortedItems.forEach((item) => {
    const initialRect = initialPositions.get(item);
    const finalRect = finalPositions.get(item);
    const deltaX = initialRect.left - finalRect.left;
    const deltaY = initialRect.top - finalRect.top;
    item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    item.style.transition = "transform 0s";
  });

  // Force reflow
  container.offsetHeight;

  // Remove transforms to trigger animation
  sortedItems.forEach((item) => {
    item.style.transform = "";
    item.style.transition = "transform 0.5s";
  });
}
