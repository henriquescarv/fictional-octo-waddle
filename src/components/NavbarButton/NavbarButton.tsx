import React, { useState, useEffect, useRef } from 'react';
import { NavbarButtonProps, FloatMenuOption } from './NavbarButton.types';
import * as Styles from './NavbarButton.styles';

const NavbarButton = ({
	text,
	listOptions,
	handleClick,
}: NavbarButtonProps) => {
	const [selectedOption, setSelectedOption] = useState<FloatMenuOption | undefined>(undefined);

	const switchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (listOptions) {
			setSelectedOption(listOptions?.[0]);
		}
	}, []);

	const optionToSet = selectedOption === listOptions?.[0] ? listOptions?.[1] : listOptions?.[0];

	return (
		<>
			{listOptions ? (
				<Styles.FloatMenuContainer ref={switchRef}>
					<Styles.FloatMenuButton onClick={() => setSelectedOption(optionToSet)}>
						<Styles.Label>
							{selectedOption?.label}
						</Styles.Label>
					</Styles.FloatMenuButton>
				</Styles.FloatMenuContainer>
			) : (
				<Styles.Button onClick={handleClick}>
					<Styles.Bar>{'/'}</Styles.Bar>
					<Styles.Text>{text}</Styles.Text>
				</Styles.Button>
			)}
		</>
	);
};

export default NavbarButton;