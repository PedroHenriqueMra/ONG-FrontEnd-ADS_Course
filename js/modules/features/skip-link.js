// Link "Pular para o conteudo":
// o href="#app" mudaria a rota do router, entao o foco e movido via JS

export function setupSkipLink() {
    const skipLink = document.getElementById("skip-link");
    const app = document.getElementById("app");

    if (!skipLink || !app) return;

    skipLink.addEventListener("click", (event) => {
        event.preventDefault();
        app.focus();
    });
}
