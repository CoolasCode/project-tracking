const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
let menuContainer = document.querySelector(".menu-container");

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    menuContainer.classList.add("phone-menu")
});
menuClose.addEventListener("click", () => {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    menuContainer.classList.remove("phone-menu")

});