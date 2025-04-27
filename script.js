let slideIndex = 0;
const images = document.querySelectorAll(".slide-image");
let slideInterval;

function slideshow() {
  images.forEach((img) => img.classList.add("hidden"));
  slideIndex++;
  if (slideIndex >= images.length) slideIndex = 0;
  images[slideIndex].classList.remove("hidden");
}

function startInterval() {
  slideInterval = setInterval(slideshow, 3000);
}

function plusSlides(step) {
  clearInterval(slideInterval);
  slideIndex += step;
  if (slideIndex < 0) slideIndex = images.length - 1;
  if (slideIndex >= images.length) slideIndex = 0;
  slideshow();
  startInterval();
}

startInterval();

function toggleNav() {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle("hidden");
}

function toggleFavorite(icon) {
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
  icon.classList.toggle("favorited");
}

document.querySelectorAll(".pet-category").forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.querySelector("img").alt.toLowerCase();
    alert(`You selected ${category}!`);
  });
});

document.querySelectorAll(".coupon-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const couponAmount = parseInt(button.dataset.amount);
    const userAmount = parseInt(prompt("Enter your spend amount (in ₹):"));
    if (isNaN(userAmount)) {
      alert("Please enter a valid number.");
      return;
    }
    const discount = Math.min(userAmount, couponAmount);
    alert(`Discount: ₹${discount}/-`);
  });
});
