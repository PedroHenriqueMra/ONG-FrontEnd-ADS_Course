import { initRouter } from "./modules/router.js";
import { configureRoutes } from "./modules/routes.js";
import { setupNavToggle } from "./modules/features/nav.js";
import { setupSkipLink } from "./modules/features/skip-link.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    
    setupNavToggle();
    setupSkipLink();
    configureRoutes();
    initRouter(app);
});
