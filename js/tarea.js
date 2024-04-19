const toggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-menu")

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navManu.classList.contains("nav-menu_visible")){
        toggle.setAttribute("arial-label", "Cerrar menú");
    } else {
        toggle.setAttribute("arial-label", "Abrir menú");
    }

});