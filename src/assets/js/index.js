

// CATEGORIES

// data
const categories = [
  {
    name: "Living Room",
    imagePath: "/src/assets/img/image-living-room.png",
    height: "377px",
    link: "#",
  },
  {
    name: "Bedroom",
    imagePath: "/src/assets/img/image-bedroom.png",
    height: "180px",
    link: "#",
  },
  {
    name: "Kitchen",
    imagePath: "/src/assets/img/image-kitchen.png",
    height: "181px",
    link: "#",
  },
];

// container
const categoriesContainer = document.getElementById("categories-container");

// data iteration
categories.forEach((category) => {
  // category container
  const div = document.createElement("div");
  div.classList.add("category");
  div.style.background = `url("${category.imagePath}")`;
  div.style.height = category.height;

  // category header
  const header = document.createElement("h3");
  header.classList.add("category-header");
  header.textContent = category.name;
  div.appendChild(header);

  // category button
  const link = document.createElement("a");
  link.textContent = "Shop Now";
  link.classList.add("underline-link");

  const arrow = document.createElement("img");
  arrow.src = "/src/assets/img/arrow.svg";
  link.appendChild(arrow);

  link.href = category.link;

  // TODO: add arrow

  // appned button to category container
  div.appendChild(link);

  // appending element into main container
  categoriesContainer.appendChild(div);
});

// --------------------------------------------

// PRODUCTS

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

//containers
const newArrivals = document.getElementById("new-arrivals");
const productsContainer = document.createElement("div");
productsContainer.classList.add("products-container");

// data iteration
products.forEach((product) => {
  // product container
  const div = document.createElement("div");
  div.classList.add("product");

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
  div.appendChild(productImg);

  // rating container
  const rating = document.createElement("div");
  rating.classList.add("rating");
  for (let i = 0; i < product.rating; i++) {
    const star = document.createElement("img");
    star.src = "/src/assets/img/star.svg";
    rating.appendChild(star);
  }

  // append rating to product container
  div.appendChild(rating);

  // product name
  const productName = document.createElement("span");
  productName.classList.add("product-name");
  productName.textContent = product.name;

  // append name to product container
  div.appendChild(productName);

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
  div.appendChild(price);

  // append element to main container
  productsContainer.appendChild(div);
});

newArrivals.appendChild(productsContainer);

// --------------------------------------------

// Cards

// data
const cards = [
  {
    title: "Free Shipping",
    text: "Order above $200",
    imagePath: "/src/assets/img/icon-delivery.svg",
  },
  {
    title: "Money-back",
    text: "30 days guarantee",
    imagePath: "/src/assets/img/icon-money.svg",
  },
  {
    title: "Secure Payments",
    text: "Secured by Stripe",
    imagePath: "/src/assets/img/icon-money.svg",
  },
  {
    title: "24/7 Support",
    text: "Phone and Email support",
    imagePath: "/src/assets/img/icon-call.svg",
  },
];

// container
const cardsContainer = document.getElementById("cards-container");

// data iteration
cards.forEach((card) => {
  const div = document.createElement("div");
  div.classList.add("card");

  // card icon
  const cardIcon = document.createElement("img");
  cardIcon.classList.add("card-icon");
  cardIcon.src = card.imagePath;
  div.appendChild(cardIcon);

  // card header
  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = card.title;
  div.appendChild(cardTitle);

  // card text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = card.text;
  div.appendChild(cardText);

  // append card container to the main container
  cardsContainer.appendChild(div);
});

// --------------------------------------------

// ARTICLES

// data
const articles = [
  {
    title: "7 ways to decor your home",
    imagePath: "/src/assets/img/image-home-decor.jpg",
  },
  {
    title: "Kitchen organization",
    imagePath: "/src/assets/img/image-kitchen-org.jpg",
  },
  {
    title: "Decor your bedroom",
    imagePath: "/src/assets/img/image-bedroom-decor.jpg",
  },
];

// container
const articlesContainer = document.getElementById("articles-container");

// data iteration
articles.forEach((article) => {
  // item container
  const div = document.createElement("div");
  div.classList.add("article");

  // article image
  const articleImg = document.createElement("img");
  articleImg.classList.add("article-img");
  articleImg.src = article.imagePath;
  div.appendChild(articleImg);

  // article title
  const articleTitle = document.createElement("p");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = article.title;
  div.appendChild(articleTitle);

  // article button
  const link = document.createElement("a");
  link.textContent = "Read more";
  link.classList.add("underline-link");

  const arrow = document.createElement("img");
  arrow.src = "/src/assets/img/arrow.svg";
  link.appendChild(arrow);

  div.appendChild(link);

  // append article to articles container
  articlesContainer.appendChild(div);
});

// --------------------------------------------
