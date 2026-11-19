// Everleaf Reading Co. — official Gumroad checkout
const GUMROAD_CHECKOUT_URL = "https://bloomoraa.gumroad.com/l/thoughtful-book-club-kit";
const button = document.getElementById("buyButton");

if (button) {
  button.href = GUMROAD_CHECKOUT_URL;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
