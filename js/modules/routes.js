import { registerRoute, registerNotFound } from "./router.js";
import { renderHome } from "./templates/home.js";
import { renderProjetos } from "./templates/projetos.js";
import { renderCadastro } from "./templates/cadastro.js";

export function configureRoutes() {
    registerRoute("/", renderHome, "Início");
    registerRoute("/projetos", renderProjetos, "Projetos");
    registerRoute("/cadastro", renderCadastro, "Cadastre-se");

    // Rota de erro 404 volta para dominio/
    registerNotFound(renderHome, "Início");
}
