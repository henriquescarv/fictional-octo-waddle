import React from 'react';
import { InputProps } from './Input.types';
import * as Styles from './Input.styles';

const Input = ({id = 'input', type = 'text', value, placeholder = '', onChange, onChangeTextarea}: InputProps) => {
	return (
		<Styles.Wrapper>
			{type === 'text' && (
				<Styles.Input
					id={id}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			)}
			{type === 'textarea' && (
				<Styles.Textarea
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={onChangeTextarea}
				/>
			)}
		</Styles.Wrapper>
	);
};

export default Input;
