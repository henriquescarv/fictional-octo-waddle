import React, { useContext } from 'react';
import Section from '../components/Section/Section';
import * as Styles from './ContactSection.styles';
import { ContactSectionProps } from './ContactSection.types';
import { LocaleContext } from '../../../providers/LocaleProvider/LocaleProvider';

const ContactSection = ({showContactModal, setShowContactModal}: ContactSectionProps) => {
	const { locale } = useContext(LocaleContext);
	const contactLocale = locale.home.contactSection;

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
