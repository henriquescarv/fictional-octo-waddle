import React, { useContext, useState } from 'react';
import Section from '../components/Section/Section';
import { ButtonProps } from '../../../../components/ui/Button/Button.types';
import HorizontalArrow from '../../../../icons/HorizontalArrow/HorizontalArrow';
import skills from '../../../../data/skils';
import Accordion from '../../../../components/ui/Accordion/Accordion';
import Card from '../../../../components/ui/Card/Card';
import DownloadIcon from '../../../../icons/DownloadIcon/DownloadIcon';
import defaultTheme from '../../../../assets/styles/deafultTheme';
import Button from '../../../../components/ui/Button/Button';
import * as Styles from './AboutSection.styles';
import { LocaleContext } from '../../../../providers/LocaleProvider/LocaleProvider';

const AboutSection = () => {
	const [accordionOpen, setAccordionOpen] = useState(true);

	const { locale } = useContext(LocaleContext);
	const aboutLocale = locale.home.aboutSection;

	const seeMoreButton = () => {
		const seeMoreButtonLabel = (
			<>
				{aboutLocale.seeMoreButton}
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

	const cvButtonLabel = () => (
		<>
			{locale.home.cvButtonLabel}
			<DownloadIcon size='md' color={defaultTheme.colors.white} />
		</>
	);

	const handleClickDownloadCV = () => {
		const pdfUrl = process.env.PUBLIC_URL + '/curriculo.pdf';
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'Currículo - Henrique.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const skillsAccordionProps = () => {
		const head = (
			<Styles.SkillsCardList>
				{skills.slice(0, 5).map((skill, index) => (
					<Styles.Skill key={index}>
						<Styles.LogoImage src={skill.imageUrl} />
						<Styles.SkillText>{skill.name}</Styles.SkillText>
					</Styles.Skill>
				))}
			</Styles.SkillsCardList>
		);

		const content = (
			<Styles.SkillsCardExpansiveList isOpen={accordionOpen}>
				{skills.slice(5, skills.length).map((skill, index) => (
					<Styles.Skill key={index} open>
						<Styles.LogoImage src={skill.imageUrl} />
						<Styles.SkillText>{skill.name}</Styles.SkillText>
					</Styles.Skill>
				))}
			</Styles.SkillsCardExpansiveList>
		);

		return {
			head,
			content,
			defaultOpen: accordionOpen,
			onClickOpen: setAccordionOpen,
		};
	};

	const mountAboutContent = (
		<Styles.AboutContainer>
			<Styles.AboutMeWrapper>
				<Styles.AboutMeDescription>{aboutLocale.description}</Styles.AboutMeDescription>
				<Styles.ButtonsContainer>
					<Button label={cvButtonLabel()} onClick={handleClickDownloadCV} />
				</Styles.ButtonsContainer>
			</Styles.AboutMeWrapper>
			<Styles.SkillsWrapper>
				<Card title={aboutLocale.skills} titlePosition='end' variant='secondary'>
					<Accordion {...skillsAccordionProps()} />
				</Card>
			</Styles.SkillsWrapper>
		</Styles.AboutContainer>
	);

	return (
		<Section
			title={aboutLocale.title}
			sectionId={'about-me'}
			content={mountAboutContent}
			rightButton={seeMoreButton() as ButtonProps}
		/>
	);
};

export default AboutSection;
