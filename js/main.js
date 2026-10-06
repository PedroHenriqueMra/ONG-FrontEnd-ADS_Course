import { initRouter } from "./modules/router.js";
import { configureRoutes } from "./modules/routes.js";
import { setupNavToggle } from "./modules/features/nav.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    
    setupNavToggle();
    configureRoutes();
    initRouter(app);
});
