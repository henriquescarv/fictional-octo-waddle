import React from 'react';
import Button from '../components/ui/Button/Button';

const Locales = {
	navbar: {
		homeButton: 'home',
		projectsButton: 'projetos',
		aboutMeButton: 'sobre-mim',
		contactsButton: 'contatos',
	},

	home: {
		helloLabel: 'Olá, mundo! Sou o Henrique.',
		chaveLabel: (<>{'> '}</>),
		devFrontLabel: 'Desenvolvedor Front-end',
		linkedinButtonLabel: 'LinkedIn',
		githubButtonLabel: 'GitHub',
		cvButtonLabel: 'Baixar CV',
		presentationLabel: (
			<>
				{'Estudante de '}
				<em>Sistemas de Informação</em>
				{'. Desde 2022 impactando milhares de usuários com projetos que utilizam '}
				<em>ReactJS, TypeScript, Redux, Jest</em>
				{', entre outras tecnologias.'}
			</>
		),
		
		projectsSection: {
			title: 'projetos',
			seeMoreButton: 'Ver tudo',
			seeProjectButton: 'repositório',
			deployButton: 'deploy',
			soonLabel: 'Em breve...'
		},
		aboutSection: {
			title: 'sobre-mim',
			description: (
				<>
					<p>Olá, eu sou o Henrique!</p>
					<br />
					<p>Organização e planejamento detalhado são os meus ideais. Desde sempre apaixonado pelo mundo da computação. Trabalhando com desenvolvimento web desde 2022, em projetos que impactam milhares de usuários na América Latina. Aprimorando habilidades com foco no desenvolvimento Front-end.</p>
				</>
			),
			seeMoreButton: 'Ver mais',
			cvButton: 'Baixar currículo',
			skills: 'habilidades',
		},
		contactSection: {
			title: 'contato',
			description: (onClick: () => void) => (
				<>
					{'Ainda ficou com dúvidas ou possui algum projeto em mente? Não hesite em '}
					<Button label='me contatar!' onClick={onClick} type='hiperlink' />
				</>
			)
		},
	},

	projects: {},

	aboutMe: {},

	contacts: {},

	contactsModal: {
		title: 'Envie uma mensagem :)',
		namePlaceholder: 'Nome',
		emailPlaceholder: 'E-mail',
		titlePlaceholder: 'Título',
		messagePlaceholder: 'Mensagem',
		sendButtonLabel: 'Enviar',
		errors: {
			tooltip: 'Preencha corretamente os campos',
			emptyField: 'Preencha este campo',
			email: 'Digite um e-mail válido',
		},
		sendSuccess: 'Mensagem enviada com sucesso! :)',
		sendError: 'Erro ao enviar mensagem!',
	},

	footer: {
		devFrontLabel: 'Desenvolvedor Front-end',
		media: 'Redes',
		copyright: '© Copyright 2022. Feito por Herique Carvalho',
	},
};

export default Locales;
