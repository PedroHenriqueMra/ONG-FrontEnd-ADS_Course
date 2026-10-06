export function engageSectionTemplate({
    title,
    items,
    listType = "ol",
    ctaText,
    ctaHref,
    extraSectionClass = "",
}) {
    const itemsHtml = items.map((item) => `<li>${item}</li>`).join("");

    return `
        <section class="section ${extraSectionClass}">
            <h2>${title}</h2>
            <div class="ong-grid">
                <div class="ong-col-lg-7">
                    <${listType} class="engage-list">${itemsHtml}</${listType}>
                </div>
                <div class="ong-col-lg-5 engage-action">
                    <a href="${ctaHref}" class="engage-cta">${ctaText}</a>
                </div>
            </div>
        </section>
    `;
}
