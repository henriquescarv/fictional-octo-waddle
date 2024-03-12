import React from 'react';
import { HorizontalArrowProps } from './HorizontalArrow.types';
import * as Styles from '../DefaultIcon.styles';

const HorizontalArrow = ({size='md', color='#FFFFFF', direction='toRight'}: HorizontalArrowProps) => {
	const sizesOptions = {
		sm: 8,
		md: 12,
		lg: 16,
	};

	return (
		<Styles.Svg height={sizesOptions[size]} viewBox="0 0 26 12" color={color} direction={direction} xmlns="http://www.w3.org/2000/svg">
			<path d="M0.896 6.752V5.232H8.76V6.752H0.896ZM8.43375 6.752V5.232H18.3538V6.752H8.43375ZM24.5875 6.752H18.0275V5.232H24.5875V6.752ZM21.4355 0.927999L25.9715 5.992L21.4355 11.056L20.1875 9.992L22.0355 7.968C22.2968 7.69067 22.5262 7.45867 22.7235 7.272C22.9208 7.08 23.1448 6.90667 23.3955 6.752V5.232C23.1448 5.07733 22.9208 4.90667 22.7235 4.72C22.5262 4.528 22.2968 4.29333 22.0355 4.016L20.1875 1.992L21.4355 0.927999Z"/>
		</Styles.Svg>
	);
};

export default HorizontalArrow;
