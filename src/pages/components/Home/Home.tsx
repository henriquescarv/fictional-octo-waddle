import React, { useCallback, useEffect, useState } from 'react';
import * as Styles from './Home.styles';
import { Locales } from '../../../locales/locales.br';
import Button from '../../../components/ui/Button/Button';
import DownloadIcon from '../../../icons/DownloadIcon/DownloadIcon';
import defaultTheme from '../../../assets/styles/deafultTheme';
import Dots from '../../../elements/Dots/Dots';
import HomeSection from './components/HomeSection/HomeSection';
import HorizontalArrow from '../../../icons/HorizontalArrow/HorizontalArrow';
import { ButtonProps, ButtonVariants } from '../../../components/ui/Button/Button.types';
import projects from '../../../data/projetcs';
import ProjectsCard from './components/ProjectsCard/ProjectsCard';
import Card from '../../../components/ui/Card/Card';
import skills from '../../../data/skils';
import GithubIcon from '../../../icons/GithubIcon/GithubIcon';
import ScrollUpIcon from '../../../icons/ScrollUpIcon/ScrollUpIcon';
import ContactModal from './components/ContactModal/ContactModal';
import ArrowBottomIcon from '../../../icons/ArrowBottomIcon/ArrowBottomIcon';
import { ReactTypical } from '@deadcoder0904/react-typical';

const Home = () => {
	const [skillsItems, setSkillsItems] = useState(5);
	const [swipeUpVisible, setSwipeUpVisible] = useState(false);
	const [showContactModal, setShowContactModal] = useState(false);
	const homeLocale = Locales.home;

	const cvButtonLabel = () => (
		<>
			{homeLocale.cvButtonLabel}
			<DownloadIcon size='md' color={defaultTheme.colors.white} />
		</>
	);

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

	const handleClickDownloadCV = () => {
		const pdfUrl = process.env.PUBLIC_URL + '/curriculo.pdf';
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'Currículo - Henrique.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const projectsSectionProps = () => {
		const seeMoreButton = () => {
			const seeMoreButtonLabel = (
				<>
					{homeLocale.homeSection.seeMoreButton}
					<HorizontalArrow />
				</>
			);

			const handleClick = () => {}; // leva para a página de projetos

			return {
				type: 'text',
				label: seeMoreButtonLabel,
				onClick: handleClick,
			};
		};

		const mountContent = () => {
			const defaultButtonProps = (buttonUrl: string, type?: 'primary' | 'secondary' | 'text') => ({
				type,
				label: homeLocale.homeSection.seeProjectButton,
				onClick: () => window.open(buttonUrl),
			});

			return (
				<>
					{projects.map(project => (
						<ProjectsCard
							title={project.title}
							key={project.title}
							imageUrl={project.imageUrl}
							imageAlt={project.imageAlt}
							description={project.description}
							button={defaultButtonProps(project.projectUrl)}
						/>
					))}
				</>
			);
		};

		return {
			title: homeLocale.homeSection.title,
			sectionId: 'projects',
			content: mountContent(),
			rightButton: seeMoreButton() as ButtonProps,
		};
	};

	const aboutSectionProps = () => {
		const skillsList = skills.slice(0, skillsItems);
		const listOpen = skillsList.length === skills.length;

		const handleExpandCard = () => {
			listOpen ? setSkillsItems(5) : setSkillsItems(skills.length);
		};

		const seeMoreButton = () => {
			const seeMoreButtonLabel = (
				<>
					{homeLocale.homeSection.seeMoreButton}
					<HorizontalArrow />
				</>
			);

			const handleClick = () => {}; // leva para a página de sobre mim

			return {
				type: 'text',
				label: seeMoreButtonLabel,
				onClick: handleClick,
			};
		};

		const mountAboutContent = (
			<Styles.AboutContainer>
				<Styles.AboutMeWrapper>
					<Styles.AboutMeDescription>{homeLocale.aboutSection.description}</Styles.AboutMeDescription>
					<Styles.ButtonsContainer>
						<Button label={cvButtonLabel()} onClick={handleClickDownloadCV} />
					</Styles.ButtonsContainer>
				</Styles.AboutMeWrapper>
				<Styles.SkillsWrapper>
					<Card title={homeLocale.aboutSection.skills} titlePosition='end' variant='secondary'>
						<Styles.SkillsCardList>
							{skills.slice(0, skillsItems).map((skill, index) => (
								<Styles.Skill key={index}>
									<Styles.LogoImage src={skill.imageUrl} />
									<Styles.SkillText>{skill.name}</Styles.SkillText>
								</Styles.Skill>
							))}
						</Styles.SkillsCardList>
						<Styles.SkillsCardExpandButtonContainer>
							<Styles.SkillsCardExpandButton open={listOpen} onClick={handleExpandCard}>
								<ArrowBottomIcon size='md'/>
							</Styles.SkillsCardExpandButton>
						</Styles.SkillsCardExpandButtonContainer>
					</Card>
				</Styles.SkillsWrapper>
			</Styles.AboutContainer>
		);

		return {
			title: homeLocale.aboutSection.title,
			sectionId: 'about-me',
			content: mountAboutContent,
			rightButton: seeMoreButton() as ButtonProps,
		};
	};

	const contactSectionProps = () => {
		const handleContactMe = () => {
			setShowContactModal(!showContactModal);
		};

		const mountContactContent = (
			<Styles.ContactContainer>
				<Styles.AboutMeDescription>
					{homeLocale.contactSection.description(handleContactMe)}
				</Styles.AboutMeDescription>
			</Styles.ContactContainer>
		);

		return {
			title: homeLocale.contactSection.title,
			sectionId: 'contact',
			content: mountContactContent,
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
								<Styles.TitleContainer>
									<ReactTypical steps={[homeLocale.devFrontLabel, 500]} loop={Infinity} wrapper='h1' />
								</Styles.TitleContainer>
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

			<HomeSection {...projectsSectionProps()} />
			<HomeSection {...aboutSectionProps()} />
			<HomeSection {...contactSectionProps()} />
			{showContactModal && <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />}
		</Styles.Wrapper>
	);
};

export default Home;
