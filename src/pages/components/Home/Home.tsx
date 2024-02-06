import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as Styles from './Home.styles';
import Button from '../../../components/ui/Button/Button';
import Dots from '../../../elements/Dots/Dots';
import { ButtonProps, ButtonVariants } from '../../../components/ui/Button/Button.types';
import GithubIcon from '../../../icons/GithubIcon/GithubIcon';
import ScrollUpIcon from '../../../icons/ScrollUpIcon/ScrollUpIcon';
import ContactModal from './components/ContactModal/ContactModal';
import { ReactTypical } from '@deadcoder0904/react-typical';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ContactSection from './ContactSection/ContactSection';
import AboutSection from './AboutSection/AboutSection';
import { LocaleContext } from '../../../providers/LocaleProvider/LocaleProvider';

const Home = () => {
	const [swipeUpVisible, setSwipeUpVisible] = useState(false);
	const [showContactModal, setShowContactModal] = useState(false);
	const { locale } = useContext(LocaleContext);
	const homeLocale = locale.home;

	const linkedinButtonProps = () => {
		const handleClickLinkedin = () => {
			window.open('https://www.linkedin.com/in/henrique-carvalho-475937216/');
		};

		return {
			label: homeLocale.linkedinButtonLabel,
			onClick: handleClickLinkedin,
			type: 'secondary' as ButtonVariants,
		};
	};

	const githubButtonProps = () => {
		const handleClickGithub = () => {
			window.open('https://github.com/henriquescarv/');
		};

		const label = (
			<>
				{homeLocale.githubButtonLabel}
				<GithubIcon />
			</>
		);

		return {
			label,
			onClick: handleClickGithub,
		};
	};

	const handleSwipeUp = () => {
		window.scrollTo(0, 0);
	};

	const swipeUpButtonProps = useCallback(() => {
		return {
			label: (<ScrollUpIcon size='md' />),
			type: 'hiperlink',
			onClick: handleSwipeUp,
		} as ButtonProps;
	}, [swipeUpVisible]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			if (scrollY > windowHeight) {
				setSwipeUpVisible(true);
			} else {
				setSwipeUpVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const titlePageContent = useCallback(() => {
		const steps = [homeLocale.devFrontLabel, 500];

		return (
			<Styles.TitleContainer>
				<ReactTypical steps={steps} loop={1} wrapper='h1' />
			</Styles.TitleContainer>
		);
	}, [homeLocale]);

	return (
		<Styles.Wrapper>
			<Styles.ScrollUpContainer visible={swipeUpVisible}>
				<Button {...swipeUpButtonProps()} />
			</Styles.ScrollUpContainer>
			<Styles.BasicInfosSection id='home'>
				<Styles.BasicInfosWrapper>
					<Styles.LeftContainer>
						<Styles.TitleWrapper>
							<Styles.TitleBox>
								<Styles.AngleBracket>
									{homeLocale.chaveLabel}
								</Styles.AngleBracket>
								{titlePageContent()}
							</Styles.TitleBox>
							<Styles.SubTitle>{homeLocale.helloLabel}</Styles.SubTitle>
						</Styles.TitleWrapper>
						<Styles.ButtonsContainer>
							<Styles.ButtonWrapper>
								<Button {...linkedinButtonProps()} />
							</Styles.ButtonWrapper>
							<Styles.ButtonWrapper>
								<Button {...githubButtonProps()} />
							</Styles.ButtonWrapper>
						</Styles.ButtonsContainer>
					</Styles.LeftContainer>
					<Styles.RightContainer>
						<Styles.DotsContainer>
							<Dots size='lg' />
						</Styles.DotsContainer>
						<Styles.PresentationContainer>
							<Styles.Circle />
							<Styles.Text>
								{homeLocale.presentationLabel}
							</Styles.Text>
						</Styles.PresentationContainer>
					</Styles.RightContainer>
				</Styles.BasicInfosWrapper>
			</Styles.BasicInfosSection>

			<ProjectsSection />
			<AboutSection />
			<ContactSection showContactModal={showContactModal} setShowContactModal={setShowContactModal} />

			{showContactModal && <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />}
		</Styles.Wrapper>
	);
};

export default Home;
