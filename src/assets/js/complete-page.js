document.addEventListener("DOMContentLoaded", async () => {
  const itemImagesContainer = document.getElementById("itemImages");
  itemImagesContainer.classList.add("item-images-container");

  // Define which products you want to display
  const productsToDisplay = ["Black Table", "Red Table", "Lamp"];

  try {
    const response = await fetch("/src/api/products.json");
    const allProducts = await response.json();

    productsToDisplay.forEach((productKey) => {
      const product = allProducts[productKey];
      if (!product) return; // Skip if not found

      const imageName =
        product.name.toLowerCase().replace(/\s+/g, "-") + ".jpg";

      const wrapper = document.createElement("div");
      wrapper.className = "product-image-wrapper";

      const img = document.createElement("img");
      img.src = `${product.imagePath}/${imageName}`;
      img.alt = product.name;
      img.className = "product-thumbnail";

      const badge = document.createElement("span");
      badge.className = "quantity-badge";
      badge.textContent = product.quantity;

      wrapper.appendChild(img);
      wrapper.appendChild(badge);
      itemImagesContainer.appendChild(wrapper);
    });
  } catch (error) {
    console.error("Failed to load products:", error);
  }
});
