import React from 'react';
import Button from '../components/ui/Button/Button';

const Locales = {
	navbar: {
		homeButton: 'home',
		projectsButton: 'projects',
		aboutMeButton: 'about-me',
		contactsButton: 'contacts',
	},

	home: {
		helloLabel: 'Hello, world! I\'m Henrique.',
		chaveLabel: (<>{'> '}</>),
		devFrontLabel: 'Front-end Developer',
		linkedinButtonLabel: 'LinkedIn',
		githubButtonLabel: 'GitHub',
		cvButtonLabel: 'Download CV',
		presentationLabel: (
			<>
				{'Student of '}
				<em>Information Systems</em>
				{'. Since 2022, impacting thousands of users with projects using '}
				<em>ReactJS, TypeScript, Redux, Jest</em>
				{', among other technologies.'}
			</>
		),
		
		projectsSection: {
			title: 'projects',
			seeMoreButton: 'See all',
			seeProjectButton: 'repository',
			deployButton: 'deploy',
			soonLabel: 'Soon...'
		},
		aboutSection: {
			title: 'about-me',
			description: (
				<>
					<p>{'Hello, I\'m Henrique!'}</p>
					<br />
					<p>Organization and detailed planning are my ideals. Always passionate about the world of computing. Working with web development since 2022, on projects that impact thousands of users in Latin America. Improving skills with a focus on Front-end development.</p>
				</>
			),
			seeMoreButton: 'See more',
			cvButton: 'Download CV',
			skills: 'skills',
		},
		contactSection: {
			title: 'contact',
			description: (onClick: () => void) => (
				<>
					{'Still have questions or have a project in mind? Feel free to '}
					<Button label='contact me!' onClick={onClick} type='hiperlink' />
				</>
			)
		},
	},

	projects: {
		title: 'projects',
	},

	aboutMe: {},

	contacts: {},

	contactsModal: {
		title: 'Send a message :)',
		namePlaceholder: 'Name',
		emailPlaceholder: 'E-mail',
		titlePlaceholder: 'Subject',
		messagePlaceholder: 'Message',
		sendButtonLabel: 'Send',
		errors: {
			tooltip: 'Fill in the fields correctly',
			emptyField: 'Fill in this field',
			email: 'Enter a valid e-mail',
		},
		sendSuccess: 'Message sent successfully! :)',
		sendError: 'Error sending message!',
	},
	
	footer: {
		devFrontLabel: 'Front-end Developer',
		media: 'Media',
		copyright: '© Copyright 2022. Made by Henrique Carvalho',
	},
};

export default Locales;
