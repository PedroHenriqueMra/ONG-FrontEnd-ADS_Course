// Menu hamburguer:

export function setupNavToggle() {
    const navToggle = document.getElementById("nav-toggle");
    const mainNav = document.getElementById("main-nav");

    if (!navToggle || !mainNav) return;

    navToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}
