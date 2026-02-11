import imgPortifolio from '../assets/img-projects/portifolio.png';
import imgEccomerce from '../assets/img-projects/eccomerce.png';
import imgCronometro from '../assets/img-projects/cronometro.png';
import imgCardsValorant from '../assets/img-projects/cards-valorant.png';

import { techIcons } from '../assets/tecnologies/tecnologies';

export const projectsList = [
    {
        id: 1,
        title: "Primeiro Portifólio",
        description: "Meu primeiro modelo de portifólio",
        image: imgPortifolio,
        techs: [techIcons.html, techIcons.css, techIcons.javascript],
        deploy: "https://lucasdmrsilva.github.io/Portifolio/",
        repo: "https://github.com/lucasdmrsilva/Portifolio"
    },

    {
        id: 2,
        title: "E-commerce",
        description: "Uma loja virtual com carrinho de compras",
        image: imgEccomerce,
        techs: [techIcons.html, techIcons.css, techIcons.javascript],
        deploy: "",
        repo: "https://github.com/lucasdmrsilva/"
    },

    {
        id: 3,
        title: "Cronômetro",
        description: "Cronômetro simples",
        image: imgCronometro,
        techs: [techIcons.html, techIcons.css, techIcons.javascript],
        deploy: "https://lucasdmrsilva.github.io/cronometro/",
        repo: "https://github.com/lucasdmrsilva/cronometro"
    },

    {
        id: 4,
        title: "Cards de Valorant",
        description: "Projeto de cards simples para aprimorar conhecimentos de HTML, CSS e Javascript",
        image: imgCardsValorant,
        techs: [techIcons.html, techIcons.css, techIcons.javascript],
        deploy: "https://lucasdmrsilva.github.io/Valorant-cards/",
        repo: "https://github.com/lucasdmrsilva/Valorant-cards"
    }
]