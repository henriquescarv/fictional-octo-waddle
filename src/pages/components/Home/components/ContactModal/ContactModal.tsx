import React, { ChangeEvent, useState } from 'react';
import Modal from '../../../../../components/ui/Modal/Modal';
import { ContactModalProps } from './ContactModal.types';
import Input from '../../../../../components/ui/Input/Input';
import { Locales } from '../../../../../locales/locales.br';
import * as Styles from './ContactModal.styles';
import Button from '../../../../../components/ui/Button/Button';

const ContactModal = ({isOpen, onClose}: ContactModalProps) => {
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [titleInput, setTitleInput] = useState('');
	const [messageInput, setMessageInput] = useState('');
	// max length pros inputs

	const ContactModalLocale = Locales.contactsModal;

	const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNameInput(event.target.value);
	};

	const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailInput(event.target.value);
	};

	const handleTitleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTitleInput(event.target.value);
	};

	const handleMessageInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMessageInput(event.target.value);
	};

	// const onSubmitForm = (e: React.FormEvent<HTMLInputElement>) => {
	// 	e.prevent.default();
	// 	console.log('a');
	// 	return;
	// };

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styles.Form className='form'>
				<Styles.UserDataContainer>
					<Input
						value={nameInput}
						placeholder={ContactModalLocale.namePlaceholder}
						onChange={handleNameInputChange}
					/>
					<Input
						value={emailInput}
						placeholder={ContactModalLocale.emailPlaceholder}
						onChange={handleEmailInputChange}
					/>
				</Styles.UserDataContainer>
				<Input
					value={titleInput}
					placeholder={ContactModalLocale.titlePlaceholder}
					onChange={handleTitleInputChange}
				/>
				<Input
					type='textarea'
					value={messageInput}
					placeholder={ContactModalLocale.messagePlaceholder}
					onChangeTextarea={handleMessageInputChange}
				/>
				<Styles.Container>
					<Button type='submit' label={ContactModalLocale.sendButtonLabel} />
					{/* <input type='submit' value='Enviar' /> */}
				</Styles.Container>
			</Styles.Form>
		</Modal>
	);
};

export default ContactModal;
