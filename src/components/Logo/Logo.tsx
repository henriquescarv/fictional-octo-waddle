import React from 'react';
import * as Styles from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({
	size='lg',
}: LogoProps) => {
	return (
		<Styles.Wrapper size={size}>{'<henrique-carvalho />'}</Styles.Wrapper>
	);
};

export default Logo;