let button = document.querySelector(".themeButton");
let body = document.querySelector(".body");
let themeButton = document.querySelector(".js-themeButton");

button.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeButton.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});
