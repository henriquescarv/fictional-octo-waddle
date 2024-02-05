import React from 'react';
import * as Styles from './Loading.styles';
import { LoadingProps } from './Loading.types';

const Loading = ({size = 'lg'}: LoadingProps) => {
	const sizes = {
		sm: 16,
		md: 20,
		lg: 24,
	};

	return (
		<Styles.Wrapper size={sizes[size]}>
			<Styles.Loading size={sizes[size]} />
		</Styles.Wrapper>
	);
};

export default Loading;
