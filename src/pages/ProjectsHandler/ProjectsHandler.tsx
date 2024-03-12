import React, { useContext } from 'react';
import * as Styles from './ProjectsHandler.styles';
import projects from '../../data/projetcs';
import ProjectsCard from '../Home/components/ProjectsCard/ProjectsCard';
import { LocaleContext } from '../../providers/LocaleProvider/LocaleProvider';
import Button from '../../components/ui/Button/Button';
import HorizontalArrow from '../../icons/HorizontalArrow/HorizontalArrow';
import { useNavigate } from 'react-router-dom';

const ProjectsHandler = () => {
	const navigate = useNavigate();
	const { language, locale } = useContext(LocaleContext);
	const projectsLocale = locale.home.projectsSection;

	const defaultButtonProps = (buttonUrl: string, type?: 'primary' | 'secondary' | 'text') => ({
		type,
		label: type === 'secondary' ? projectsLocale.deployButton : projectsLocale.seeProjectButton,
		onClick: () => window.open(buttonUrl),
		fullWidth: true,
	});

	return (
		<Styles.Wrapper>
			<Styles.Head>
				<Button label={ <HorizontalArrow direction='toLeft' /> } type='hiperlink' onClick={() => navigate('/')} />
				<Styles.Title>{locale.projects.title}</Styles.Title>
			</Styles.Head>
			<Styles.ProjectsSection>
				{projects.map(project => (
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
			</Styles.ProjectsSection>
		</Styles.Wrapper>
	);
};

export default ProjectsHandler;
