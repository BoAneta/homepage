{
  const welcome = () => {
    console.log("Siemka ekipo z YouCode :)");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeButton = document.querySelector(".js-buttonText");

    body.classList.toggle("dark");
    themeButton.innerText = body.classList.contains("dark")
      ? "jasny"
      : "ciemny";
  };

  const init = () => {
    const button = document.querySelector(".themeButton");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
