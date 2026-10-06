export function cardTemplate({
    title,
    text,
    variant = "about",
    colClass = "",
    imageSrc = "",
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
                <img src="${imageSrc}" alt="${imageAlt}">
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
