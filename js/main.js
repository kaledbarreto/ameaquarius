const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

//Event listener for the noticias menu item
const noticiasMenuItem = document.querySelector("#noticias_menu_item");

noticiasMenuItem.addEventListener("click", () => {
  window.location.href = "/news";
});
