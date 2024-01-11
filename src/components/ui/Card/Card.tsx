import React from 'react';
import { CardProps } from './Card.types';
import * as Styles from './Card.styles';

const Card = ({
	title,
	variant = 'primary',
	titlePosition = 'start',
	children,
}: CardProps) => {
	return (
		<Styles.Wrapper>
			{variant === 'primary' && (
				<Styles.Title textAlign={titlePosition}>{title}</Styles.Title>
			)}
			<Styles.Card>
				{variant === 'secondary' && (
					<>
						<Styles.Title variant={variant} textAlign={titlePosition}>{title}</Styles.Title>
						<Styles.LineBreak />
					</>
				)}
				{children}
			</Styles.Card>
		</Styles.Wrapper>
	);
};

export default Card;
