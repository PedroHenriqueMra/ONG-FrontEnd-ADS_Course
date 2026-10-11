import { getItem, setItem } from "../services/storage.js"

const STORAGE_KEY = "ong:tema";

function getTheme() {
    const saved = getItem(STORAGE_KEY, null);
    if (saved)
        return saved;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme (theme, button) {
    window.document.documentElement.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(theme === "dark"));
}

export function setupThemeToggle () {
    let button = document.getElementById("toggle-theme");
    if (!button) return;

    applyTheme(getTheme(), button);

    button.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme == "light" ? "dark" : "light";
        setItem(STORAGE_KEY, next);
        
        applyTheme(getTheme(), button);
    });
}
