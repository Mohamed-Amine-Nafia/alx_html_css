const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    nav.style.cssText = "visibility: visible; transform: scale(1);";
  } else {
    nav.style.cssText = "visibility: hidden; transform: scale(0);";
  }
});
