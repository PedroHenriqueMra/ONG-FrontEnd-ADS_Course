# Patas de Rua

Site institucional de uma ONG fictícia de resgate e adoção de cães e gatos em situação de rua, desenvolvido como projeto da disciplina de Desenvolvimento Front-end do curso de Análise e Desenvolvimento de Sistemas. Os textos institucionais usam *lorem ipsum* como conteúdo provisório.

**Deploy:** https://pedrohenriquemra.github.io/ONG-FrontEnd-ADS_Course/

## Funcionalidades

- **SPA (Single Page Application):** navegação entre Início, Projetos e Cadastre-se sem recarregar a página, com roteamento por hash (`#/`, `#/projetos`, `#/cadastro`).
- **Formulário de cadastro** com validação em tempo real (e-mail, senha, telefone, CEP e CPF) e mensagens de erro por campo.
- **Persistência local:** os cadastros são salvos no `localStorage` do navegador.
- **Animações com GSAP:** transição entre páginas e efeito de destaque nos cards de projetos.
- **Layout responsivo** com grid de 12 colunas e menu hambúrguer em telas pequenas.
- **Acessibilidade (WCAG 2.1 AA):** contraste adequado, navegação por teclado, link "Pular para o conteúdo", foco e título da página atualizados a cada rota, textos alternativos e erros de formulário anunciados por leitores de tela.

## Tecnologias

- HTML5 semântico
- CSS3 (custom properties, Flexbox, Grid e media queries)
- JavaScript (ES6+) com ES Modules, sem frameworks
- [GSAP 3](https://gsap.com/) via CDN
- [Vite](https://vite.dev/) para o servidor de desenvolvimento e a build de produção (minificação de HTML, CSS e JS)
- Git e GitHub, com GitFlow
- GitHub Pages para o deploy

## Estrutura do projeto

```
├── index.html                 # Página única da SPA
├── vite.config.js             # Configuração da build (Vite + minificação do HTML)
├── package.json               # Dependências e scripts (dev, build, preview)
├── css/
│   ├── index.css              # Importa as demais folhas de estilo
│   ├── variables.css          # Cores, fontes, espaçamentos (design tokens)
│   ├── pages.css              # Estilos de layout e componentes
│   ├── snippets.css           # Toasts de alerta
│   └── mediaquries.css        # Ajustes responsivos
├── scripts/
│   └── otimizar-imagens.js    # Gera as versões WebP e JPEG otimizadas (npm run images)
├── imagens/                   # Imagens originais e, em otimizadas/, as versões usadas no site
└── js/
    ├── main.js                # Ponto de entrada
    └── modules/
        ├── router.js          # Roteador por hash
        ├── routes.js          # Registro das rotas
        ├── templates/         # Páginas (home, projetos, cadastro)
        ├── components/        # Componentes reutilizáveis (card, seção de engajamento)
        ├── features/          # Comportamentos (validação, menu, animações, alertas...)
        └── services/          # Acesso ao localStorage
```

Cada template retorna um objeto `{ html, afterRender }`: o roteador insere o HTML no `<main>` e depois executa `afterRender` para ligar os eventos da página.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior (já inclui o npm).

```bash
git clone https://github.com/PedroHenriqueMra/ONG-FrontEnd-ADS_Course.git
cd ONG-FrontEnd-ADS_Course
npm install        # instala o Vite e o minificador de HTML
npm run dev        # servidor de desenvolvimento com recarga automática
```

Depois, acesse o endereço exibido no terminal (por padrão http://localhost:5173).

### Build de produção

```bash
npm run build      # gera a versão minificada na pasta dist/
npm run preview    # serve a pasta dist/ para conferir a build
```

Para regenerar as imagens otimizadas depois de trocar uma imagem original:

```bash
npm run images     # converte para WebP em duas larguras e gera um JPEG de fallback
```

A build junta os módulos JavaScript e as folhas de estilo em um arquivo de cada, minifica HTML, CSS e JS e adiciona um hash ao nome dos arquivos para controle de cache. O projeto não possui testes automatizados.

## Fluxo de trabalho (GitFlow)

| Branch | Função |
|--------|--------|
| `main` --> Código em produção; cada versão publicada recebe uma tag (`v1.0.0`, `v1.0.1`, `v1.1.0`) |
| `develop` --> Integração das funcionalidades em desenvolvimento |
| `feature/*` --> Uma funcionalidade por branch, criada a partir da `develop` e integrada a ela via Pull Request |
| `release/*` --> Preparação de uma nova versão, mesclada na `main` (com tag) e de volta na `develop` |
| `hotfix/*` --> Correção urgente criada a partir da `main`, mesclada na `main` (com tag) e na `develop` |

### Padrão de commits

Os commits seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `tipo(escopo): descrição`.

| Tipo | Uso |
|------|-----|
| `feat` --> Nova funcionalidade |
| `fix` --> Correção de bug |
| `refactor` --> Mudança de código sem alterar comportamento |
| `perf` --> Melhoria de desempenho |
| `docs` --> Documentação |
| `chore` --> Tarefas de manutenção e configuração |

Exemplo: `fix(cadastro): corrige pattern e formato do campo de telefone`.

## Versões

- **v1.0.0:** estrutura inicial do projeto.
- **v1.0.1:** correção da validação do campo de telefone.
- **v1.1.0:** adequações de acessibilidade (WCAG 2.1 AA), estrutura para deploy e documentação.

## Autor

Pedro Henrique: [@PedroHenriqueMra](https://github.com/PedroHenriqueMra)
