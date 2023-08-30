document.getElementById("getInTouch").addEventListener("click", function (e) {
  e.preventDefault();
  const brands = document.getElementById("brands");

  if (brands.style.display === "none") {
    brands.style.display = "block";
  } else {
    brands.style.display = "none";
  }
  console.log(e);
});
