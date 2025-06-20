document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".social");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = "fadeIn 0.6s ease-out forwards";
    }, 300 * index);
  });
});
