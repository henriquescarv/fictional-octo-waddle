import React, { useState } from 'react';
import * as Styles from './Navbar.styles';
import { Locales } from '../../locales/locales.br';
import NavbarButton from '../NavbarButton/NavbarButton';
import { FloatMenuOption } from '../NavbarButton/NavbarButton.types';
import Logo from '../Logo/Logo';
import BrazilFlagIcon from '../../icons/BrazilFlagIcon/BrazilFlagIcon';
import UsaFlagIcon from '../../icons/UsaFlagIcon/UsaFlagIcon';
import HalfBurguerIcon from '../../icons/HalfBurguerIcon/HalfBurguerIcon';
import defaultTheme from '../../assets/styles/deafultTheme';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import useLocale from '../../hooks/useLocale/useLocale';

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

	const optionsModalProps = () => ({
		isOpen: showOptionsModal,
		onClose: () => setShowOptionsModal(false),
	});

	const mountNavbarButtons = () => (
		<>
			<NavbarButton text={Locales.navbar.homeButton} sectionId='#home' />
			<NavbarButton text={Locales.navbar.projectsButton} sectionId='#projects' />
			<NavbarButton text={Locales.navbar.aboutMeButton} sectionId='#about-me' />
			<NavbarButton text={Locales.navbar.contactsButton} sectionId='#contact' />
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
				{showOptionsModal && (
					<Modal {...optionsModalProps()}>
						<Styles.MobileButtonsContainer>
							<Styles.MobileLogoWrapper>
								<Logo />
							</Styles.MobileLogoWrapper>
							<Styles.MobileNavbarButtons>
								{mountNavbarButtons()}
							</Styles.MobileNavbarButtons>
							<Styles.LocaleMobileWrapper>
								<NavbarButton listOptions={floatMenuOptions} selectedOptionDefault={floatMenuOptions[1]} />
							</Styles.LocaleMobileWrapper>
						</Styles.MobileButtonsContainer>
					</Modal>
				)}
			</Styles.NavbarWrapper>
		</Styles.Header>
	);
};

export default Navbar;
