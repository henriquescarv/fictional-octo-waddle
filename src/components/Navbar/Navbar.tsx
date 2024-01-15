import React from 'react';
import * as Styles from './Navbar.styles';
import { Locales } from '../../locales/locales.br';
import NavbarButton from '../NavbarButton/NavbarButton';
import { FloatMenuOption } from '../NavbarButton/NavbarButton.types';
import Logo from '../Logo/Logo';
import BrazilFlagIcon from '../../icons/BrazilFlagIcon/BrazilFlagIcon';
import UsaFlagIcon from '../../icons/UsaFlagIcon/UsaFlagIcon';

const Navbar = () => {
	const floatMenuOptions: FloatMenuOption[] = [
		{
			id: 'brazil',
			label: <BrazilFlagIcon />,
			handleClick: () => null,
		},
		{
			id: 'usa',
			label: <UsaFlagIcon />,
			handleClick: () => null,
		},
	];

	const handleSwipeUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Styles.Header>
			<Styles.NavbarWrapper>
				<Styles.LogoButton onClick={handleSwipeUp}>
					<Logo />
				</Styles.LogoButton>
				<Styles.ButtonsContainer>
					<NavbarButton text={Locales.navbar.homeButton} />
					<NavbarButton text={Locales.navbar.projectsButton} />
					<NavbarButton text={Locales.navbar.aboutMeButton} />
					<NavbarButton text={Locales.navbar.contactsButton} />
					<NavbarButton listOptions={floatMenuOptions} />
				</Styles.ButtonsContainer>
			</Styles.NavbarWrapper>
		</Styles.Header>
	);
};

export default Navbar;
