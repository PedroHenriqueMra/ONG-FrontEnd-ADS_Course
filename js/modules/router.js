import { setupPageTransiction } from "./features/transiction.js";

const routes = new Map();
let notFoundHandler = null;
let outletElement = null;

export function registerRoute(path, handler) {
    routes.set(path, handler);
}

export function registerNotFound(handler) {
    notFoundHandler = handler;
}

function getCurrentPath() {
    const hash = window.location.hash || "#/";
    const path = hash.slice(1); // remove o "#"
    return path === "" ? "/" : path;
}

function updateActiveLink(path) {
    document.querySelectorAll("[data-route]").forEach((link) => {
        if (link.dataset.route === path) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function closeMobileMenuIfOpen() {
    const mainNav = document.getElementById("main-nav");
    const navToggle = document.getElementById("nav-toggle");
    if (mainNav && mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
    }
}

function renderCurrentRoute() {
    const path = getCurrentPath();
    const handler = routes.get(path) || notFoundHandler;

    if (!handler) {
        outletElement.innerHTML = "<p>Página não encontrada.</p>";
        return;
    }

    const { html, afterRender } = handler();

    outletElement.innerHTML = html;
    
    setupPageTransiction(outletElement);

    if (typeof afterRender === "function") {
        afterRender(outletElement);
    }
 
    updateActiveLink(path);
    closeMobileMenuIfOpen();
}

export function initRouter(outlet) {
    outletElement = outlet;
    window.addEventListener("hashchange", renderCurrentRoute);
    renderCurrentRoute();
}
