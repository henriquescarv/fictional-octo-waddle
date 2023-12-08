import React from 'react';
import { ButtonProps } from './Button.types';
import * as Styles from './Button.styles';

const Button: React.FC<ButtonProps> = ({type = 'primary', label, onClick}: ButtonProps) => {
	return (
		<>
			{type === 'primary' && (
				<Styles.PrimaryButton onClick={onClick}>
					{label}
				</Styles.PrimaryButton>
			)}

			{type === 'secondary' && (
				<Styles.SecondaryButton onClick={onClick}>
					{label}
				</Styles.SecondaryButton>
			)}

			{type === 'text' && (
				<Styles.TextButton onClick={onClick}>
					{label}
				</Styles.TextButton>
			)}
		</>
	);
};

export default Button;
