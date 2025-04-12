const gridButtons = document.querySelector("#grid-buttons");
const productsContainer = document.querySelector("#products-container");

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

productsContainer.addEventListener(
  "onload",
  loadProducts(productsContainer, data)
);

async function loadProducts(container, data) {
  let products = [];
  try {
    let response = await fetch(data);

    if (!response.ok) throw new Error(`HTTP error! Status: ${data.status}`);

    products = await response.json();
  } catch (error) {
    console.log("Failed to fetch data: ", error);
    container.innerHTML = "<p>Failed to load data...</p>";
  }
  renderProducts(container, products);
}

function renderProducts(container, products) {
  container.innerHTML = "";

  Array.from(products).forEach((product) => {
    const productContainer = document.createElement("a");
    productContainer.classList.add("product");

    // product picture container
    const productImg = document.createElement("div");
    productImg.classList.add("product-image");
    productImg.style.backgroundImage = `url("${product.imagePath}")`;

    // top
    const productTop = document.createElement("div");
    productTop.classList.add("product-top");

    // top right
    const productTopLeft = document.createElement("div");
    productTopLeft.classList.add("product-top-left");

    // sign
    const sign = document.createElement("span");
    sign.classList.add("sign");
    sign.textContent = "new";
    productTopLeft.appendChild(sign);

    // discount
    if (product.discount != 0) {
      const discount = document.createElement("span");
      discount.classList.add("discount");
      discount.textContent = `-${product.discount}%`;
      productTopLeft.appendChild(discount);
    }

    // append top left to top container
    productTop.appendChild(productTopLeft);

    // Wishlist button
    const wishlistButton = document.createElement("button");
    wishlistButton.classList.add("wishlist-button");
    wishlistButton.style.backgroundImage = 'url("/src/assets/img/heart.svg")';
    productTop.appendChild(wishlistButton);

    // append product top to image container
    productImg.appendChild(productTop);

    // append image to product container
    productContainer.appendChild(productImg);

    // rating container
    const rating = document.createElement("div");
    rating.classList.add("rating");
    for (let i = 0; i < product.rating; i++) {
      const star = document.createElement("img");
      star.src = "/src/assets/img/star.svg";
      rating.appendChild(star);
    }

    // append rating to product container
    productContainer.appendChild(rating);

    // product name
    const productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    // append name to product container
    productContainer.appendChild(productName);

    // price
    const price = document.createElement("div");
    price.classList.add("price");

    const currentPrice = document.createElement("span");
    currentPrice.classList.add("current-price");

    if (product.discount === 0) {
      currentPrice.textContent = `$${product.price}`;
      price.appendChild(currentPrice);
    } else {
      const prevPrice = document.createElement("span");
      prevPrice.classList.add("prev-price");
      currentPrice.textContent = `$${(
        product.price -
        (product.price * product.discount) / 100
      ).toFixed(2)}`;
      prevPrice.textContent = `$${product.price}`;
      price.appendChild(currentPrice);
      price.appendChild(prevPrice);
    }

    // append price to product container
    productContainer.appendChild(price);

    // append element to main container
    productsContainer.appendChild(productContainer);
  });
}
