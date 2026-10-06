import { setupPageTransiction } from "./features/transiction.js";

const routes = new Map();
let notFoundHandler = null;
let outletElement = null;
let isFirstRender = true;

const SITE_NAME = "Patas de Rua";

export function registerRoute(path, handler, title) {
    routes.set(path, { handler, title });
}

export function registerNotFound(handler, title) {
    notFoundHandler = { handler, title };
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

// Leitores de tela nao percebem a troca de conteudo de uma SPA,
// entao o foco vai para o <main> (exceto no primeiro carregamento)
function announceRoute(title) {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    if (isFirstRender) {
        isFirstRender = false;
        return;
    }

    outletElement.focus();
}

function renderCurrentRoute() {
    const path = getCurrentPath();
    const route = routes.get(path) || notFoundHandler;

    if (!route) {
        outletElement.innerHTML = "<p>Página não encontrada.</p>";
        announceRoute("Página não encontrada");
        return;
    }

    const { html, afterRender } = route.handler();

    outletElement.innerHTML = html;
    
    setupPageTransiction(outletElement);

    if (typeof afterRender === "function") {
        afterRender(outletElement);
    }
 
    updateActiveLink(path);
    closeMobileMenuIfOpen();
    announceRoute(route.title);
}

export function initRouter(outlet) {
    outletElement = outlet;
    window.addEventListener("hashchange", renderCurrentRoute);
    renderCurrentRoute();
}
