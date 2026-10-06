import { registerRoute, registerNotFound } from "./router.js";
import { renderHome } from "./templates/home.js";
import { renderProjetos } from "./templates/projetos.js";
import { renderCadastro } from "./templates/cadastro.js";

export function configureRoutes() {
    registerRoute("/", renderHome);
    registerRoute("/projetos", renderProjetos);
    registerRoute("/cadastro", renderCadastro);

    // Rota de erro 404 volta para dominio/
    registerNotFound(renderHome);
}
