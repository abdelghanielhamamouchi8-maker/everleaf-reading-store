// Add your Gumroad product URL here after creating the product.
const GUMROAD_CHECKOUT_URL = "PASTE_GUMROAD_PRODUCT_URL_HERE";
const button = document.getElementById("buyButton");
if (GUMROAD_CHECKOUT_URL.startsWith("https://")) {
  button.href = GUMROAD_CHECKOUT_URL;
} else {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("The Gumroad checkout link will be connected before launch.");
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
