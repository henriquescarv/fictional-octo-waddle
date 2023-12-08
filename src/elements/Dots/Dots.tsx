import React from 'react';
import { DotsProps } from './Dots.types';


const Dots = ({size='md', color='#607B96'}: DotsProps) => {
	const sizesOptions = {
		sm: 60,
		md: 72,
		lg: 92,
	};

	return (
		<svg height={sizesOptions[size]} viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg" fill={color}>
			<circle cx="2.39697" cy="2.39697" r="2"/>
			<circle cx="22.397" cy="2.39697" r="2"/>
			<circle cx="42.397" cy="2.39697" r="2"/>
			<circle cx="62.397" cy="2.39697" r="2"/>
			<circle cx="82.397" cy="2.39697" r="2"/>
			<circle cx="2.39697" cy="22.397" r="2"/>
			<circle cx="22.397" cy="22.397" r="2"/>
			<circle cx="42.397" cy="22.397" r="2"/>
			<circle cx="62.397" cy="22.397" r="2"/>
			<circle cx="82.397" cy="22.397" r="2"/>
			<circle cx="2.39697" cy="42.397" r="2"/>
			<circle cx="22.397" cy="42.397" r="2"/>
			<circle cx="42.397" cy="42.397" r="2"/>
			<circle cx="62.397" cy="42.397" r="2"/>
			<circle cx="82.397" cy="42.397" r="2"/>
			<circle cx="2.39697" cy="62.397" r="2"/>
			<circle cx="22.397" cy="62.397" r="2"/>
			<circle cx="42.397" cy="62.397" r="2"/>
			<circle cx="62.397" cy="62.397" r="2"/>
			<circle cx="82.397" cy="62.397" r="2"/>
			<circle cx="2.39697" cy="82.397" r="2"/>
			<circle cx="22.397" cy="82.397" r="2"/>
			<circle cx="42.397" cy="82.397" r="2"/>
			<circle cx="62.397" cy="82.397" r="2"/>
			<circle cx="82.397" cy="82.397" r="2"/>
		</svg>
	);
};

export default Dots;
