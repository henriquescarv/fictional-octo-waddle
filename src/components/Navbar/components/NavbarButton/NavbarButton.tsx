import React from 'react';
import { NavbarButtonProps } from './NavbarButton.types';
import * as Styles from './NavbarButton.styles';

const NavbarButton = ({
	text,
	onClick,
}: NavbarButtonProps) => {
	return (
		<>
			{(
				<Styles.Button onClick={onClick}>
					<Styles.Bar>{'#'}</Styles.Bar>
					<Styles.Text>{text}</Styles.Text>
				</Styles.Button>
			)}
		</>
	);
};

export default NavbarButton;