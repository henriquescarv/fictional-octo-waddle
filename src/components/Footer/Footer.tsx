import React, { useContext } from 'react';
import * as Styles from './Footer.styles';
import Logo from '../Logo/Logo';
import Button from '../ui/Button/Button';
import { ButtonVariants } from '../ui/Button/Button.types';
import LinkedinIcon from '../../icons/LinkedinIcon/LinkedinIcon';
import GithubIcon from '../../icons/GithubIcon/GithubIcon';
import { LocaleContext } from '../../providers/LocaleProvider/LocaleProvider';

const Footer = () => {
	const { locale } = useContext(LocaleContext);

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
		<Styles.Footer>
			<Styles.FooterContainer>
				<Styles.TopContainer>
					<Styles.LeftContainer>
						<Styles.LogoButton onClick={handleSwipeUp}>
							<Logo size='sm' />
						</Styles.LogoButton>
						{locale.footer.devFrontLabel}
					</Styles.LeftContainer>
					<Styles.MediaContainer>
						<Styles.MediaTitle>{locale.footer.media}</Styles.MediaTitle>
						<Styles.MediaButtonsContainer>
							<Button {...linkedinButtonProps()} />
							<Button {...githubButtonProps()} />
						</Styles.MediaButtonsContainer>
					</Styles.MediaContainer>
				</Styles.TopContainer>
				<Styles.CopyrightContainer>
					{locale.footer.copyright}
				</Styles.CopyrightContainer>
			</Styles.FooterContainer>
		</Styles.Footer>
	);
};

export default Footer;
