import React from 'react';
import { CardProps } from './Card.types';
import * as Styles from './Card.styles';
import Button from '../Button/Button';

const Card = ({
	title,
	imageUrl,
	description,
	button,
	secondButton
}: CardProps) => {
	return (
		<Styles.Wrapper>
			<Styles.Title>{title}</Styles.Title>
			<Styles.Card>
				<Styles.CardImage src={imageUrl} />
				<Styles.CardInfoWrapper>
					{description}
					<Styles.ButtonsContainer>
						<Button {...button} />
						{secondButton && (
							<Button {...secondButton} />
						)}
					</Styles.ButtonsContainer>
				</Styles.CardInfoWrapper>
			</Styles.Card>
		</Styles.Wrapper>
	);
};

export default Card;
