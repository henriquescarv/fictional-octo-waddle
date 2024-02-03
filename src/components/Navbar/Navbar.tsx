import React, { useState } from 'react';
import * as Styles from './Navbar.styles';
import { Locales } from '../../locales/locales.br';
import NavbarButton from './components/NavbarButton/NavbarButton';
import { FloatMenuOption } from './components/NavbarButton/NavbarButton.types';
import Logo from '../Logo/Logo';
import BrazilFlagIcon from '../../icons/BrazilFlagIcon/BrazilFlagIcon';
import UsaFlagIcon from '../../icons/UsaFlagIcon/UsaFlagIcon';
import HalfBurguerIcon from '../../icons/HalfBurguerIcon/HalfBurguerIcon';
import defaultTheme from '../../assets/styles/deafultTheme';
import Button from '../ui/Button/Button';
import useLocale from '../../hooks/useLocale/useLocale';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';

const Navbar = () => {
	const [showOptionsModal, setShowOptionsModal] = useState(false);

	const newLocale = useLocale.getLocale();
	
	console.log(newLocale);

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

	const handleChangeSectionClick = (sectionId: string) => {
		window.location.href = sectionId;
		setShowOptionsModal(false);
	};

	const mountNavbarButtons = () => (
		<>
			<NavbarButton text={Locales.navbar.homeButton} onClick={() => handleChangeSectionClick('#home')} />
			<NavbarButton text={Locales.navbar.projectsButton} onClick={() => handleChangeSectionClick('#projects')} />
			<NavbarButton text={Locales.navbar.aboutMeButton} onClick={() => handleChangeSectionClick('#about-me')} />
			<NavbarButton text={Locales.navbar.contactsButton} onClick={() => handleChangeSectionClick('#contact')} />
		</>
	);

	return (
		<Styles.Header>
			<Styles.NavbarWrapper>
				<Styles.LogoButton onClick={handleSwipeUp}>
					<Logo />
				</Styles.LogoButton>
				<Styles.ButtonsContainer>
					{mountNavbarButtons()}
					<NavbarButton listOptions={floatMenuOptions} selectedOptionDefault={floatMenuOptions[1]} />
				</Styles.ButtonsContainer>
				<Styles.MobileSideMenu>
					<Button type='text' label={<HalfBurguerIcon size='lg' color={defaultTheme.colors.primary} />} onClick={()  => setShowOptionsModal(!showOptionsModal)}  />
				</Styles.MobileSideMenu>

				<Styles.ModalWrapper isOpen={showOptionsModal}>
					<Styles.CloseButtonWrapper>
						<Styles.CloseButton onClick={()  => setShowOptionsModal(false)}>
							<CloseIcon />
						</Styles.CloseButton>
					</Styles.CloseButtonWrapper>
					<Styles.MobileButtonsContainer>
						<Styles.MobileLogoButton onClick={() => handleChangeSectionClick('#home')}>
							<Logo />
						</Styles.MobileLogoButton>
						<Styles.MobileNavbarButtons>
							{mountNavbarButtons()}
						</Styles.MobileNavbarButtons>
						<Styles.LocaleMobileWrapper>
							<NavbarButton listOptions={floatMenuOptions} selectedOptionDefault={floatMenuOptions[1]} />
						</Styles.LocaleMobileWrapper>
					</Styles.MobileButtonsContainer>
				</Styles.ModalWrapper>
			</Styles.NavbarWrapper>
		</Styles.Header>
	);
};

export default Navbar;
