import { pictureTemplate } from "./picture.js";

// largura exibida do card: 1 coluna no celular, 2 no tablet, 3 no desktop
const PROJECT_IMAGE_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw";

export function cardTemplate({
    title,
    text,
    variant = "about",
    colClass = "",
    image = null,
    imageAlt = "",
    linkText = "Saiba mais",
    linkHref = "",
}) {
    if (variant === "project") {
        const linkHtml = linkHref
            ? `<p class="project-link"><a href="${linkHref}">${linkText}<span class="sr-only"> (${title})</span></a></p>`
            : "";

        return `
            <article class="${colClass} project-card">
                ${pictureTemplate({ image, alt: imageAlt, sizes: PROJECT_IMAGE_SIZES })}
                <div class="project-info">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
                ${linkHtml}
            </article>
        `;
    }

    return `
        <article class="${colClass} about-card">
            <h2>${title}</h2>
            <p>${text}</p>
        </article>
    `;
}
