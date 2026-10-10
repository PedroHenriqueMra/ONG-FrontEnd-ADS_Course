// Imagens otimizadas geradas por scripts/otimizar-imagens.js (npm run images).
// Importadas aqui para o Vite copiá-las para a build com hash no nome.
import hero480 from "../../../imagens/otimizadas/hero-480.webp";
import hero900 from "../../../imagens/otimizadas/hero-900.webp";
import heroJpg from "../../../imagens/otimizadas/hero-900.jpg";

import caes400 from "../../../imagens/otimizadas/caes-400.webp";
import caes800 from "../../../imagens/otimizadas/caes-800.webp";
import caesJpg from "../../../imagens/otimizadas/caes-800.jpg";

import caes2400 from "../../../imagens/otimizadas/caes-2-400.webp";
import caes2800 from "../../../imagens/otimizadas/caes-2-800.webp";
import caes2Jpg from "../../../imagens/otimizadas/caes-2-800.jpg";

import gatos400 from "../../../imagens/otimizadas/gatos-400.webp";
import gatos750 from "../../../imagens/otimizadas/gatos-750.webp";
import gatosJpg from "../../../imagens/otimizadas/gatos-750.jpg";

// width e height são as dimensões da maior versão, usadas para o navegador
// reservar o espaço da imagem antes de ela carregar
export const IMAGENS = {
    hero: {
        webp: [[hero480, 480], [hero900, 900]],
        fallback: heroJpg,
        width: 900,
        height: 1200,
    },
    caes: {
        webp: [[caes400, 400], [caes800, 800]],
        fallback: caesJpg,
        width: 800,
        height: 444,
    },
    caes2: {
        webp: [[caes2400, 400], [caes2800, 800]],
        fallback: caes2Jpg,
        width: 800,
        height: 379,
    },
    gatos: {
        webp: [[gatos400, 400], [gatos750, 750]],
        fallback: gatosJpg,
        width: 750,
        height: 500,
    },
};
