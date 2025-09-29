(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-menu-btn"),
    closeMenuBtn: document.querySelector(".header-menu-close-btn"),
    menu: document.querySelector(".header-mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();
