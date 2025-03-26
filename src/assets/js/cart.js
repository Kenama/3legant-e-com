let cart = [];

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  cart.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("cart-item");

    productElement.innerHTML = `
      <div class="content">
        <div class="image-placeholder">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="prod-info">
          <div class="product-details">
            <h3>${product.name}</h3>
            <p class="prod-color">Color: ${product.color}</p>
            <p class="prod-price">$${product.price.toFixed(2)}</p>
          </div>
          <div class="quantity-controls">
            <button class="decrease" onclick="updateQuantity(${index}, -1)">-</button>
            <span class="quantity">${product.quantity}</span>
            <button class="increase" onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeProduct(${index})">X</button>
      </div>
    `;

    cartContainer.appendChild(productElement);
  });

  updateTotal();
}

// new product
function addProduct(name, price, image, color = "Black", quantity = 1) {
  cart.push({ name, price, image, color, quantity });
  renderCart();
}

// remove
function removeProduct(index) {
  cart.splice(index, 1);
  renderCart();
}

// quantity
function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    removeProduct(index);
  } else {
    renderCart();
  }
}

function updateTotal() {
  const totalElement = document.querySelector(".total-value");
  const subtotalElement = document.querySelector(
    ".summary-item .summary-value"
  );

  let subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

  let shippingCost =
    document.querySelector('input[name="shipping"]:checked')?.nextElementSibling
      .nextElementSibling.textContent || "$0.00";
  let shippingPrice = parseFloat(shippingCost.replace("$", ""));

  totalElement.textContent = `$${(subtotal + shippingPrice).toFixed(2)}`;
}

// Add products initially
addProduct("Tray Table", 38.0, "/src/assets/img/lamp.png");
addProduct("Wooden Chair", 49.99, "/src/assets/img/table.png");

document.querySelectorAll('input[name="shipping"]').forEach((radio) => {
  radio.addEventListener("change", updateTotal);
});

//                                  |NOT FOR NOW|
//=======================================================================================================================
//                                 |FUTURE UPDATE|

// document.addEventListener("DOMContentLoaded", () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartContainer = document.querySelector(".cart-items");
//     const totalPriceElement = document.getElementById("total-price");

//     // Save cart to Local Storage
//     function saveCart() {
//         localStorage.setItem("cart", JSON.stringify(cart));
//         renderCart();
//     }

//     // Render the cart on cart.html
//     function renderCart() {
//         if (!cartContainer) return; // Ensure this only runs on cart.html

//         cartContainer.innerHTML = "";
//         let total = 0;

//         if (cart.length === 0) {
//             cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//         } else {
//             cart.forEach((item, index) => {
//                 total += item.price * item.quantity;
//                 cartContainer.innerHTML += `
//                     <div class="cart-item">
//                         <img src="${item.image}" alt="${item.name}" class="cart-image">
//                         <div class="cart-info">
//                             <h4>${item.name}</h4>
//                             <p>$${item.price.toFixed(2)}</p>
//                             <div class="cart-controls">
//                                 <button class="decrease" data-index="${index}">-</button>
//                                 <span>${item.quantity}</span>
//                                 <button class="increase" data-index="${index}">+</button>
//                             </div>
//                         </div>
//                         <button class="remove-item" data-index="${index}">X</button>
//                     </div>
//                 `;
//             });
//         }

//         totalPriceElement.textContent = total.toFixed(2);
//         attachCartEventListeners();
//     }

//     // Add item to cart (on any page)
//     function addToCart(product) {
//         const existingItem = cart.find(item => item.id === product.id);

//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             cart.push({ ...product, quantity: 1 });
//         }

//         saveCart();
//     }

//     // Remove item from cart
//     function removeFromCart(index) {
//         cart.splice(index, 1);
//         saveCart();
//     }

//     // Increase quantity
//     function increaseQuantity(index) {
//         cart[index].quantity++;
//         saveCart();
//     }

//     // Decrease quantity
//     function decreaseQuantity(index) {
//         if (cart[index].quantity > 1) {
//             cart[index].quantity--;
//         } else {
//             removeFromCart(index);
//         }
//         saveCart();
//     }

//     // Attach event listeners for cart actions
//     function attachCartEventListeners() {
//         document.querySelectorAll(".increase").forEach(button => {
//             button.addEventListener("click", event => {
//                 increaseQuantity(event.target.dataset.index);
//             });
//         });

//         document.querySelectorAll(".decrease").forEach(button => {
//             button.addEventListener("click", event => {
//                 decreaseQuantity(event.target.dataset.index);
//             });
//         });

//         document.querySelectorAll(".remove-item").forEach(button => {
//             button.addEventListener("click", event => {
//                 removeFromCart(event.target.dataset.index);
//             });
//         });
//     }

//     // Add to Cart event (works on all product pages)
//     document.querySelectorAll(".add-to-cart").forEach(button => {
//         button.addEventListener("click", event => {
//             const productElement = event.target.closest(".product") || event.target;
//             const product = {
//                 id: productElement.dataset.id,
//                 name: productElement.dataset.name,
//                 price: parseFloat(productElement.dataset.price),
//                 image: productElement.dataset.image,
//             };
//             addToCart(product);
//             alert(`${product.name} added to cart!`);
//         });
//     });

//     // Clear cart button
//     const clearCartButton = document.getElementById("clear-cart");
//     if (clearCartButton) {
//         clearCartButton.addEventListener("click", () => {
//             localStorage.removeItem("cart");
//             cart.length = 0;
//             renderCart();
//         });
//     }

//     // Render cart if on cart.html
//     renderCart();
// });
