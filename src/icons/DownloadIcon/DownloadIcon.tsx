import React from 'react';
import { DownloadIconProps } from './DownloadIcon.types';

const DownloadIcon = ({size='sm', color='#607B96'}: DownloadIconProps) => {
	const sizesOptions = {
		sm: 10,
		md: 16,
		lg: 24,
	};

	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={sizesOptions[size]} viewBox="0 0 20 24" fill="none">
			<path d="M0 24H20V21.1765H0V24ZM20 8.47059H14.2857V0H5.71429V8.47059H0L10 18.3529L20 8.47059Z" fill={color}/>
		</svg>
	);
};

export default DownloadIcon;
