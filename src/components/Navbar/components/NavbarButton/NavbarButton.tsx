import React, { useState, useEffect } from 'react';
import { NavbarButtonProps, FloatMenuOption } from './NavbarButton.types';
import * as Styles from './NavbarButton.styles';

const NavbarButton = ({
	text,
	listOptions,
	selectedOptionDefault,
	onClick,
}: NavbarButtonProps) => {
	const [selectedOption, setSelectedOption] = useState<FloatMenuOption | undefined>(selectedOptionDefault);

	useEffect(() => {
		if (listOptions && !selectedOptionDefault) {
			setSelectedOption(listOptions?.[0]);
		}
	}, []);

	const optionToSet = selectedOption === listOptions?.[0] ? listOptions?.[1] : listOptions?.[0];

	return (
		<>
			{listOptions ? (
				<Styles.FloatMenuContainer>
					<Styles.FloatMenuButton onClick={() => setSelectedOption(optionToSet)}>
						<Styles.Label>
							{selectedOption?.label}
						</Styles.Label>
					</Styles.FloatMenuButton>
				</Styles.FloatMenuContainer>
			) : (
				<Styles.Button onClick={onClick}>
					<Styles.Bar>{'#'}</Styles.Bar>
					<Styles.Text>{text}</Styles.Text>
				</Styles.Button>
			)}
		</>
	);
};

export default NavbarButton;