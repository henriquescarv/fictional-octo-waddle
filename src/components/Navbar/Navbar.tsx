import React from 'react';
import * as Styles from './Navbar.styles';
import { Locales } from '../../locales/locales.br';
import NavbarButton from '../NavbarButton/NavbarButton';
import { FloatMenuOption } from '../NavbarButton/NavbarButton.types';
import Logo from '../Logo/Logo';

const Navbar = () => {
	const floatMenuOptions: FloatMenuOption[] = [
		{
			label: 'PT-BR',
			handleClick: () => null,
		},
		{
			label: 'EN',
			handleClick: () => null,
		},
		{
			label: 'ES',
			handleClick: () => null,
		}
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
					<NavbarButton floatMenuList={floatMenuOptions} />
				</Styles.ButtonsContainer>
			</Styles.NavbarWrapper>
		</Styles.Header>
	);
};

export default Navbar;
