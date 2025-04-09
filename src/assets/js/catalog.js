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

// --------------------------------------------

// data
const products = [
  {
    name: "Loveseat Sofa",
    price: 400,
    discount: 20,
    rating: 5,
    imagePath: "/src/assets/img/image-loveseat-sofa.png",
  },
  {
    name: "Table lamp",
    price: 24.99,
    discount: 30,
    rating: 5,
    imagePath: "/src/assets/img/image-table-lamp.png",
  },
  {
    name: "Beige table lamp",
    price: 24.99,
    discount: 10,
    rating: 5,
    imagePath: "/src/assets/img/image-beige-table-lamp.png",
  },
  {
    name: "Bamboo basket",
    price: 24.99,
    discount: 5,
    rating: 5,
    imagePath: "/src/assets/img/image-bamboo-basket.png",
  },
];

// Container
const productsContainer = document.querySelector("#products-container");

