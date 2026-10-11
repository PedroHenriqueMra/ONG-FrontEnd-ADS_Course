import { cardTemplate } from "../components/card.js";

import { pictureTemplate } from "../components/picture.js";
import { IMAGENS } from "../assets/imagens.js";

const LOREM =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore obcaecati voluptates deleniti voluptatibus at temporibus, magnam nihil voluptas commodi deserunt adipisci repudiandae iusto rem dolore aliquam mollitia officia pariatur distinctio!";

const aboutCards = [
    { title: "Apresentação", text: LOREM },
    { title: "Missao", text: LOREM },
    { title: "Visao", text: LOREM },
    { title: "Valores", text: LOREM },
];

export function renderHome() {
    const cardsHtml = aboutCards
        .map((card) =>
            cardTemplate({
                ...card,
                variant: "about",
                colClass: "ong-col-md-6 ong-col-lg-3",
            })
        )
        .join("");

    const html = `
        <div class="hero">
            ${pictureTemplate({
                image: IMAGENS.hero,
                alt: "Grupo de cães resgatados olhando para a câmera, um deles em pé apoiado nas patas traseiras",
                sizes: "(min-width: 1280px) 1240px, 100vw",
                loading: "eager",
                fetchPriority: "high",
            })}
        </div>
        <section class="section">
            <div class="ong-grid">
                ${cardsHtml}
            </div>
        </section>
    `;

    return { html };
}
