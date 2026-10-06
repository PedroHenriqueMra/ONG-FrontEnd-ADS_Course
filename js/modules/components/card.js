export function cardTemplate({
    title,
    text,
    variant = "about",
    colClass = "",
    imageSrc = "",
    imageAlt = "",
    linkText = "Saiba mais",
    linkHref = "javascript:void(0)",
}) {
    if (variant === "project") {
        return `
            <article class="${colClass} project-card">
                <img src="${imageSrc}" alt="${imageAlt}">
                <div class="project-info">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
                <p class="project-link"><a href="${linkHref}">${linkText}</a></p>
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
