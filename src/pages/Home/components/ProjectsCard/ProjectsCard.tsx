import React from 'react';
import * as Styles from './ProjectsCard.styles';
import Button from '../../../../components/ui/Button/Button';
import { ProjectsCardProps } from './ProjectsCard.types';
import Card from '../../../../components/ui/Card/Card';

const ProjectsCard = ({
	title,
	imageUrl,
	imageAlt='project-initial-screen',
	description,
	button,
	secondButton
}: ProjectsCardProps) => (
	<Card title={title}>
		<Styles.CardImage src={imageUrl} alt={imageAlt} />
		<Styles.CardInfoWrapper>
			<Styles.DefaultText>
				{description}
			</Styles.DefaultText>
			<Styles.ButtonsContainer>
				<Button {...button} />
				{secondButton && (
					<Button {...secondButton} />
				)}
			</Styles.ButtonsContainer>
		</Styles.CardInfoWrapper>
	</Card>
);

export default ProjectsCard;
