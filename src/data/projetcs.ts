// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import marveldexPreview from '../assets/images/projects/marveldex.png';
import myPortfolioPreview from '../assets/images/projects/my_portfolio.png';
import oldPortfolioPreview from '../assets/images/projects/old_portfolio.png';

const projects = [
	{
		title: '#marveldex',
		imageSrc: marveldexPreview,
		imageAlt: 'marveldex screen preview',
		description: {
			br: 'Aplicação que consome uma poderosa API da Marvel. Exibe listas de personagens, quadrinhos e autores. ReactJS, TypeScript, Styled Components e Redux.',
			en: 'App consuming a powerful Marvel API. Displays lists of characters, comics, and authors, as well as details for each item. ReactJS, TypeScript, Styled Components and Redux.',
		},
		projectUrl: 'https://github.com/henriquescarv/marveldex',
		deployUrl: 'https://marveldex.vercel.app/',
	},
	{
		title: '#my-portfolio',
		imageSrc: myPortfolioPreview,
		imageAlt: 'my portfolio screen preview',
		description: {
			br: 'Este portfólio que você está vendo. Engloba meus projetos mais relevantes e informações sobre minha carreira até aqui. Construído com ReactJS, TypeScript e Styled Components.',
			en: 'This portfolio you are viewing. Presents my most relevant projects and information about my career so far. Built with ReactJS, TypeScript, and Styled Components.',
		},
		projectUrl: 'https://github.com/henriquescarv/my-portfolio',
		deployUrl: '',
	},
	{
		title: '#old-portfolio',
		imageSrc: oldPortfolioPreview,
		imageAlt: 'my old portfolio screen preview',
		description: {
			br: 'Meu portfólio antigo. Criei em um momento onde estava querendo aprender conceitos a respeito do Next.JS, portanto, é estruturado com Next.JS, TypeScript e SASS.',
			en: 'My old portfolio. I created it at a time when I was trying to learn concepts about Next.JS framework, so it was structured with Next.JS, TypeScript, and SASS.',
		},
		projectUrl: 'https://github.com/henriquescarv/old-portfolio',
		deployUrl: 'https://henriqueoldportfolio.vercel.app/',
	},
];

export default projects;
