// <picture> com WebP em várias larguras (srcset) e JPEG de fallback.
// "sizes" informa ao navegador a largura exibida, para ele baixar só a versão necessária.
export function pictureTemplate({ image, alt, sizes, loading = "lazy", fetchPriority = "auto" }) {
    const srcset = image.webp.map(([src, width]) => `${src} ${width}w`).join(", ");

    return `
        <picture>
            <source type="image/webp" srcset="${srcset}" sizes="${sizes}">
            <img src="${image.fallback}" alt="${alt}"
                width="${image.width}" height="${image.height}"
                loading="${loading}" fetchpriority="${fetchPriority}" decoding="async">
        </picture>
    `;
}
