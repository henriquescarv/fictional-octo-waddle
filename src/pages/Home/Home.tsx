import React from 'react';
import * as Styles from './Home.styles';
import { Locales } from '../../locales/locales.br';
import Button from '../../components/ui/Button/Button';
import DownloadIcon from '../../icons/DownloadIcon/DownloadIcon';
import defaultTheme from '../../assets/styles/deafultTheme';
import Dots from '../../elements/Dots/Dots';
import HomeSection from '../../components/HomeSection/HomeSection';
import HorizontalArrow from '../../icons/HorizontalArrow/HorizontalArrow';
import { ButtonProps } from '../../components/ui/Button/Button.types';
import Card from '../../components/ui/Card/Card';
import projects from '../../data/projetcs';

const Home = () => {
	const homeLocale = Locales.home;

	const cvButtonLabel = () => (
		<>
			{homeLocale.cvButtonLabel}
			<DownloadIcon size='md' color={defaultTheme.colors.white} />
		</>
	);

	const handleClickLinkedin = () => {
		window.open('https://www.linkedin.com/in/henrique-carvalho-475937216/');
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
						<Card
							key={project.title}
							imageUrl={project.imageUrl}
							title={project.title}
							description={project.description}
							button={defaultButtonProps(project.projectUrl)}
						/>
					))}
				</>
			);
		};

		return {
			title: homeLocale.homeSection.title,
			content: mountContent(),
			rightButton: seeMoreButton() as ButtonProps,
		};
	};

	return (
		<Styles.HomeWrapper>
			<Styles.BasicInfosWrapper>
				<Styles.LeftContainer>
					<Styles.Wrapper>
						<Styles.PreTitle>{homeLocale.helloLabel}</Styles.PreTitle>
						<Styles.TitleBox>
							<Styles.Title>
								{homeLocale.chaveLabel}
							</Styles.Title>
							<Styles.Title>{homeLocale.devFrontLabel}</Styles.Title>
						</Styles.TitleBox>
					</Styles.Wrapper>
					<Styles.ButtonsContainer>
						<Button onClick={handleClickDownloadCV} label={cvButtonLabel()} type='secondary' />
						<Button onClick={handleClickLinkedin} label={homeLocale.linkedinButtonLabel} />
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

			<HomeSection {...projectsSectionProps()} />
			<HomeSection {...projectsSectionProps()} />
		</Styles.HomeWrapper>
	);
};

export default Home;
