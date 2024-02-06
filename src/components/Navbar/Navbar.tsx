import React, { useCallback, useContext, useState } from 'react';
import * as Styles from './Navbar.styles';
import NavbarButton from './components/NavbarButton/NavbarButton';
import Logo from '../Logo/Logo';
import BrazilFlagIcon from '../../icons/BrazilFlagIcon/BrazilFlagIcon';
import UsaFlagIcon from '../../icons/UsaFlagIcon/UsaFlagIcon';
import HalfBurguerIcon from '../../icons/HalfBurguerIcon/HalfBurguerIcon';
import defaultTheme from '../../assets/styles/deafultTheme';
import Button from '../ui/Button/Button';
import CloseIcon from '../../icons/CloseIcon/CloseIcon';
import { LocaleContext } from '../../providers/LocaleProvider/LocaleProvider';

const Navbar = () => {
	const [showOptionsModal, setShowOptionsModal] = useState(false);
	const { language, setLanguage } = useContext(LocaleContext);

	const { locale } = useContext(LocaleContext);

	const handleSwipeUp = () => {
		window.scrollTo(0, 0);
	};

	const handleChangeSectionClick = (sectionId: string) => {
		window.location.href = sectionId;
		setShowOptionsModal(false);
	};

	const mountNavbarButtons = () => (
		<>
			<NavbarButton text={locale.navbar.homeButton} onClick={() => handleChangeSectionClick('#home')} />
			<NavbarButton text={locale.navbar.projectsButton} onClick={() => handleChangeSectionClick('#projects')} />
			<NavbarButton text={locale.navbar.aboutMeButton} onClick={() => handleChangeSectionClick('#about-me')} />
			<NavbarButton text={locale.navbar.contactsButton} onClick={() => handleChangeSectionClick('#contact')} />
		</>
	);

	const brandButtonProps = useCallback(() => {
		const children = (
			<>
				{language === 'en' && (
					<BrazilFlagIcon />
				)}
				{language === 'br' && (
					<UsaFlagIcon />
				)}
			</>
		);

		const onClick = () => {
			if (language === 'br') {
				setLanguage('en');
			}
			if (language === 'en') {
				setLanguage('br');
			}
		};
	
		return {
			children,
			onClick,
		};
	}, [language]);

	return (
		<Styles.Header>
			<Styles.NavbarWrapper>
				<Styles.LogoButton onClick={handleSwipeUp}>
					<Logo />
				</Styles.LogoButton>
				<Styles.ButtonsContainer>
					{mountNavbarButtons()}
					<Styles.BrandButton {...brandButtonProps()} />
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
							<Styles.BrandButton {...brandButtonProps()} />
						</Styles.LocaleMobileWrapper>
					</Styles.MobileButtonsContainer>
				</Styles.ModalWrapper>
			</Styles.NavbarWrapper>
		</Styles.Header>
	);
};

export default Navbar;
