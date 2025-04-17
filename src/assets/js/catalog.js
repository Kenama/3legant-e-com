import { fetchData } from "./main.js";
import { renderProducts } from "./main.js";

const gridButtons = document.querySelector("#grid-buttons");
const productsContainer = document.querySelector("#products-container");
const buttonClose = document.querySelector("#button-close");

buttonClose.addEventListener("click", () => {
  document.querySelector("#notification-bar").style.display = "none"
})

function selectGrid() {
  Array.from(gridButtons.children).forEach((gridButton) => {
    gridButton.classList.remove("active");
  });

  this.classList.add("active");

  if (this.getAttribute("id") == "button-grid-double-column") {
    productsContainer.classList.remove("products-grid-single-column");
    productsContainer.classList.add("products-grid-double-column");
  } else if (this.getAttribute("id") == "button-grid-single-column") {
    productsContainer.classList.remove("products-grid-double-column");
    productsContainer.classList.add("products-grid-single-column");
  }
}

Array.from(gridButtons.children).forEach((gridButton) => {
  gridButton.addEventListener("click", selectGrid);
});

// --------------------------------------------

// Container
let data = "/src/api/products.json";

productsContainer.addEventListener("onload", loadProducts());

async function loadProducts() {
  const products = await fetchData(data);
  if (products) renderProducts(products, productsContainer);
}
