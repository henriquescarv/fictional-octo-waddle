import React from 'react';
import * as Styles from './Footer.styles';
import Logo from '../Logo/Logo';
import { Locales } from '../../locales/locales.br';
import Button from '../ui/Button/Button';
import { ButtonVariants } from '../ui/Button/Button.types';
import LinkedinIcon from '../../icons/LinkedinIcon/LinkedinIcon';
import GithubIcon from '../../icons/GithubIcon/GithubIcon';

const Footer = () => {
	const linkedinButtonProps = () => ({
		label: <LinkedinIcon size='lg' />,
		onClick: () => window.open('https://www.linkedin.com/in/henrique-carvalho-475937216/'),
		type: 'text' as ButtonVariants,
	});

	const githubButtonProps = () => ({
		label: <GithubIcon size='lg' />,
		onClick: () => window.open('https://github.com/henriquescarv/'),
		type: 'text' as ButtonVariants,
	});

	const handleSwipeUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Styles.FooterContainer>
			<Styles.Footer>
				<Styles.TopContainer>
					<Styles.LeftContainer>
						<Styles.LogoButton onClick={handleSwipeUp}>
							<Logo size='sm' />
						</Styles.LogoButton>
						{Locales.footer.devFrontLabel}
					</Styles.LeftContainer>
					<Styles.MediaContainer>
						<Styles.MediaTitle>{Locales.footer.media}</Styles.MediaTitle>
						<Styles.MediaButtonsContainer>
							<Button {...linkedinButtonProps()} />
							<Button {...githubButtonProps()} />
						</Styles.MediaButtonsContainer>
					</Styles.MediaContainer>
				</Styles.TopContainer>
				<Styles.CopyrightContainer>
					{Locales.footer.copyright}
				</Styles.CopyrightContainer>
			</Styles.Footer>
		</Styles.FooterContainer>
	);
};

export default Footer;
