import React from 'react';
import { ButtonProps } from './Button.types';
import * as Styles from './Button.styles';
import Loading from '../Loading/Loading';

const Button: React.FC<ButtonProps> = ({type = 'primary', label, onClick, disabled = false, loading = false, width}: ButtonProps) => {
	return (
		<>
			{(type === 'primary') && (
				<Styles.PrimaryButton disabled={disabled} onClick={onClick} width={width}>
					{loading ? <Loading /> : label}
				</Styles.PrimaryButton>
			)}

			{(type === 'submit') && (
				<Styles.PrimaryButton disabled={disabled} type={type}>
					{label}
				</Styles.PrimaryButton>
			)}

			{type === 'secondary' && (
				<Styles.SecondaryButton disabled={disabled} onClick={onClick}>
					{label}
				</Styles.SecondaryButton>
			)}

			{type === 'text' && (
				<Styles.TextButton disabled={disabled} onClick={onClick}>
					{label}
				</Styles.TextButton>
			)}

			{type === 'hiperlink' && (
				<Styles.HiperlinkButton disabled={disabled} onClick={onClick}>
					{label}
				</Styles.HiperlinkButton>
			)}
		</>
	);
};

export default Button;
