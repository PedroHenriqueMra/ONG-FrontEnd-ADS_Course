import { cardTemplate } from "../components/card.js";
import { engageSectionTemplate } from "../components/engage-section.js";

import { setupProjectCardHover } from "../features/card-hover.js";

const LOREM =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad velit optio, libero dolores provident facere voluptatum at! Vel, iste adipisci dignissimos, doloremque quam, enim officiis mollitia nam ullam maxime perspiciatis?";

const projects = [
    {
        title: "Projeto 1",
        text: LOREM,
        imageSrc: "imagens/projetos/caes_desabrigados.jpeg",
        imageAlt: "Cinco cães atrás da grade de um canil, alguns com as patas apoiadas nela",
    },
    {
        title: "Projeto 2",
        text: LOREM,
        imageSrc: "imagens/projetos/caes_desabrigados_2.jpg",
        imageAlt: "Vários cães de rua atrás de uma cerca de arame em um abrigo com baias numeradas",
    },
    {
        title: "Projeto 3",
        text: LOREM,
        imageSrc: "imagens/projetos/gatos_desabrigados.jpeg",
        imageAlt: "Gatinho rajado olhando para a câmera por entre as grades de uma gaiola",
    },
];

function afterRender(root) {
    setupProjectCardHover(root);
}

export function renderProjetos() {
    const cardsHtml = projects
        .map((project) =>
            cardTemplate({
                ...project,
                variant: "project",
                linkText: "Quero ajudar",
                linkHref: "#/cadastro",
                colClass: "ong-col-md-6 ong-col-lg-4",
            })
        )
        .join("");

    const voluntariadoHtml = engageSectionTemplate({
        title: "Se torne apoiador voluntário",
        listType: "ol",
        items: [
            "Escolha uma frente de atuação",
            "Preencha o formulário de cadastro",
            "Participe da reunião de integração",
        ],
        ctaText: "Cadastre-se para ser apoiador voluntário",
        ctaHref: "#/cadastro",
    });

    const doacoesHtml = engageSectionTemplate({
        title: "Doações",
        listType: "ul",
        items: [
            "Pix: contribua via chave pix",
            "Doação recorrente: débito mensal automático definido pelo doador",
            "Doação de itens: contribuição com produtos, alimentos e roupas",
        ],
        ctaText: "Quero contribuir financeiramente",
        ctaHref: "mailto:minhaong@gmail.com?subject=Quero%20contribuir%20financeiramente",
        extraSectionClass: "donate-section",
    });

    const html = `
        <section class="section">
            <div class="ong-grid">
                ${cardsHtml}
            </div>
        </section>
        ${voluntariadoHtml}
        ${doacoesHtml}
    `;

    return { html, afterRender };
}
