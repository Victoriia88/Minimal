document.getElementById("getInTouch").addEventListener("click", function () {
  const brands = document.getElementById("brands");

  if (brands.style.display === "none") {
    brands.style.display = "block";
  } else {
    brands.style.display = "none";
  }
});
