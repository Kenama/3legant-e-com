const gridButtons = document.querySelector("#grid-buttons");

function selectGrid() {
  Array.from(gridButtons.children).forEach((gridButton) => {
    gridButton.classList.remove("active");
  });

  this.classList.add("active");
}

Array.from(gridButtons.children).forEach((gridButton) => {
  gridButton.addEventListener("click", selectGrid);
});
