import React, { useContext } from 'react';
import ProjectsCard from '../components/ProjectsCard/ProjectsCard';
import projects from '../../../data/projetcs';
// import HorizontalArrow from '../../../../icons/HorizontalArrow/HorizontalArrow';
// import { ButtonProps } from '../../../../components/ui/Button/Button.types';
import Section from '../components/Section/Section';
import { LocaleContext } from '../../../providers/LocaleProvider/LocaleProvider';
import * as Styles from './ProjectsSection.styles';
import HorizontalArrow from '../../../icons/HorizontalArrow/HorizontalArrow';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../../components/ui/Button/Button.types';

// all those comments will be 'uncomment' when the projects page is built

const ProjectsSection = () => {
	const { language, locale } = useContext(LocaleContext);
	const navigate = useNavigate();
	const projectsLocale = locale.home.projectsSection;

	const seeMoreButton = () => {
		const seeMoreButtonLabel = (
			<>
				{projectsLocale.seeMoreButton}
				<HorizontalArrow />
			</>
		);

		const handleClick = () => { navigate('/projects'); }; // leva para a página de projetos

		return {
			type: 'text',
			label: seeMoreButtonLabel,
			onClick: handleClick,
		};
	};

	const mountContent = () => {
		const defaultButtonProps = (buttonUrl: string, type?: 'primary' | 'secondary' | 'text') => ({
			type,
			label: type === 'secondary' ? projectsLocale.deployButton : projectsLocale.seeProjectButton,
			onClick: () => window.open(buttonUrl),
			fullWidth: true,
		});

		return (
			<>
				{projects.slice(0, 3).map(project => (
					<ProjectsCard
						title={project.title}
						key={project.title}
						imageUrl={project.imageSrc}
						imageAlt={project.imageAlt}
						description={project.description[language]}
						button={defaultButtonProps(project.projectUrl)}
						secondButton={project.deployUrl.length ? defaultButtonProps(project.deployUrl, 'secondary') : undefined}
					/>
				))}
				{projects.length < 3 && <Styles.EmptyProject>{projectsLocale.soonLabel}</Styles.EmptyProject>}
			</>
		);
	};

	return (
		<Section
			title= {projectsLocale.title}
			sectionId= {'projects'}
			content= {mountContent()}
			rightButton= {seeMoreButton() as ButtonProps}
		/>
	);
};

export default ProjectsSection;
