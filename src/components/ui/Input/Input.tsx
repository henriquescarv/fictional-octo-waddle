import React from 'react';
import { InputProps } from './Input.types';
import * as Styles from './Input.styles';

const Input = ({id = 'input', type = 'text', value = '', placeholder = '', error = '', onChange, onChangeTextarea, onBlur}: InputProps) => {
	return (
		<Styles.Wrapper>
			{!!value.length && (
				<Styles.InputTitleWrapper>
					{placeholder}
				</Styles.InputTitleWrapper>
			)}
			{type === 'text' && (
				<Styles.Input
					id={id}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
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
			{!!error.length && (
				<Styles.InputError>
					{error}
				</Styles.InputError>
			)}
		</Styles.Wrapper>
	);
};

export default Input;
