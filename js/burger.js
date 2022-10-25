function burger() {
  const menu = document.querySelector(".navmenu");

  const burger = document.querySelector(".burger");
  burger.addEventListener("click", function (e) {
    if (this.closest(".burger")) {
      menu.style = `
     display: flex;
     `;
      menu.classList.toggle("menu_active");
      burger.children[0].classList.toggle("burger-active");
    }
  });
}
document.addEventListener("DOMContentLoaded", burger);
