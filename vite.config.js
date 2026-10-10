import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";

// O Vite minifica CSS e JS por padrão, mas não o HTML.
// Este plugin minifica o index.html gerado na build.
function minifyHtml() {
    return {
        name: "minify-html",
        apply: "build",
        transformIndexHtml: {
            order: "post",
            handler: (html) =>
                minify(html, {
                    collapseWhitespace: true,
                    removeComments: true,
                    minifyJS: true,
                    minifyCSS: true,
                }),
        },
    };
}

export default defineConfig({
    // Caminhos relativos: o site funciona tanto na raiz de um domínio quanto
    // em um subcaminho, como o do GitHub Pages (/ONG-FrontEnd-ADS_Course/).
    base: "./",
    plugins: [minifyHtml()],
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
});
