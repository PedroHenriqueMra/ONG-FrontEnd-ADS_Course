// Gera versões otimizadas das imagens originais em imagens/otimizadas/:
// WebP em duas larguras (para o srcset) e um JPEG de fallback.
// Uso: npm run images
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "imagens/otimizadas";

// larguras escolhidas a partir do tamanho exibido na tela (ver README)
const IMAGES = [
    { src: "imagens/index/ong_animais_de_rua.jpeg", name: "hero", widths: [480, 900] },
    { src: "imagens/projetos/caes_desabrigados.jpeg", name: "caes", widths: [400, 800] },
    { src: "imagens/projetos/caes_desabrigados_2.jpg", name: "caes-2", widths: [400, 800] },
    { src: "imagens/projetos/gatos_desabrigados.jpeg", name: "gatos", widths: [400, 750] },
];

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

await mkdir(OUT_DIR, { recursive: true });

for (const image of IMAGES) {
    const original = (await stat(image.src)).size;
    console.log(`${image.src} (${kb(original)})`);

    for (const width of image.widths) {
        const file = path.join(OUT_DIR, `${image.name}-${width}.webp`);
        await sharp(image.src).resize({ width }).webp({ quality: 75 }).toFile(file);
        console.log(`  -> ${file} (${kb((await stat(file)).size)})`);
    }

    const fallbackWidth = Math.max(...image.widths);
    const fallback = path.join(OUT_DIR, `${image.name}-${fallbackWidth}.jpg`);
    await sharp(image.src)
        .resize({ width: fallbackWidth })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(fallback);
    console.log(`  -> ${fallback} (${kb((await stat(fallback)).size)})`);
}
