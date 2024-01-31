import React from 'react';
import { Locales } from '../../../../locales/locales.br';
import Section from '../components/Section/Section';
import * as Styles from './ContactSection.styles';
import { ContactSectionProps } from './ContactSection.types';

const ContactSection = ({showContactModal, setShowContactModal}: ContactSectionProps) => {
	const contactLocale = Locales.home.contactSection;

	const handleContactMe = () => {
		setShowContactModal(!showContactModal);
	};

	const mountContactContent = (
		<Styles.ContactContainer>
			<Styles.AboutMeDescription>
				{contactLocale.description(handleContactMe)}
			</Styles.AboutMeDescription>
		</Styles.ContactContainer>
	);

	return (
		<Section
			title={contactLocale.title}
			sectionId={'contact'}
			content={mountContactContent}
		/>
	);
};

export default ContactSection;
