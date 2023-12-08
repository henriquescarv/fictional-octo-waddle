import React from 'react';
import { ArrowBottomIconProps } from './ArrowBottomIcon.types';

const ArrowBottomIcon = ({size='sm', color='#607B96'}: ArrowBottomIconProps) => {
	const sizesOptions = {
		sm: 10,
		md: 16,
		lg: 24,
	};

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={sizesOptions[size]} viewBox="0 0 10 9" fill={color}>
			<line x1="0.707107" y1="1.29289" x2="5.70711" y2="6.29289" stroke={color} strokeWidth="2"/>
			<line x1="4.29289" y1="6.29289" x2="9.29289" y2="1.29289" stroke={color} strokeWidth="2"/>
		</svg>
	);
};

export default ArrowBottomIcon;
