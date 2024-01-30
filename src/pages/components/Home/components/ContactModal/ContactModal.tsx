import React, { ChangeEvent, useCallback, useState } from 'react';
import Modal from '../../../../../components/ui/Modal/Modal';
import { ContactModalProps, FormBodyProps } from './ContactModal.types';
import Input from '../../../../../components/ui/Input/Input';
import { Locales } from '../../../../../locales/locales.br';
import * as Styles from './ContactModal.styles';
import Button from '../../../../../components/ui/Button/Button';
import emailjs from '@emailjs/browser';
import useValidator from '../../../../../hooks/useValidator/useValidator';

const fieldsDefault = {
	nameInput: '',
	emailInput: '',
	titleInput: '',
	messageInput: '',
};

const ContactModal = ({isOpen, onClose}: ContactModalProps) => {
	const [formBody, setFormBody] = useState<FormBodyProps>(fieldsDefault);
	const [errors, setErrors] = useState<FormBodyProps>(fieldsDefault);
	// max length pros inputs

	const { email } = useValidator();
	const ContactModalLocale = Locales.contactsModal;

	const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormBody({...formBody, nameInput: event.target.value} as FormBodyProps);
		setErrors({...errors, nameInput: ''});
	};

	const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormBody({...formBody, emailInput: event.target.value} as FormBodyProps);
		setErrors({...errors, emailInput: ''});
	};

	const handleTitleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormBody({...formBody, titleInput: event.target.value} as FormBodyProps);
		setErrors({...errors, titleInput: ''});
	};

	const handleMessageInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setFormBody({...formBody, messageInput: event.target.value} as FormBodyProps);
		setErrors({...errors, messageInput: ''});
	};

	const validateEmailInput = () => {
		if (!(email(formBody.emailInput))) {
			setErrors({...errors, emailInput: ContactModalLocale.errors.email});
		}
	};

	const validateInputs = useCallback(() => {
		const formErrors = {
			nameInput: '',
			emailInput: '',
			titleInput: '',
			messageInput: '',
		};

		if (!(email(formBody.emailInput))) {
			formErrors.emailInput = ContactModalLocale.errors.email;
		}
		if (!formBody.nameInput.length) {
			formErrors.nameInput = ContactModalLocale.errors.emptyField;
		}
		if (!formBody.emailInput.length) {
			formErrors.emailInput = ContactModalLocale.errors.emptyField;
		}
		if (!formBody.titleInput.length) {
			formErrors.titleInput = ContactModalLocale.errors.emptyField;
		}
		if (!formBody.messageInput.length) {
			formErrors.messageInput = ContactModalLocale.errors.emptyField;
		}

		setErrors(formErrors);
	}, [formBody, formBody.emailInput, errors]);

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		validateInputs();

		const sendMail = () => {
			const templateParams = {
				from_name: formBody?.nameInput,
				from_email: formBody?.emailInput,
				from_title: formBody?.titleInput,
				message: formBody?.messageInput,
			};

			emailjs.send('service_sotc48h', 'template_2quaj4f', templateParams, 'noSDoE-pcEX5OJzEc')
				.then((r) => {
					alert(`EMAIL ENVIADO - STATUS ${r.status}`);
				})
				.catch((e) => {
					alert(`NÃO FOI POSSÍVEL ENVIAR A MENSAGEM - ${e}`);
					console.log(e);
				});
		};
		
		const noErrors = !!formBody.nameInput && !!formBody.emailInput && !!formBody.titleInput && !!formBody.messageInput 
			&& !errors.nameInput.length && !errors.emailInput.length && !errors.titleInput.length && !errors.messageInput.length;

		console.log(noErrors);

		if (noErrors) {
			sendMail();
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styles.Form onSubmit={e => onSubmitForm(e)}>
				<Styles.Title>
					{ContactModalLocale.title}
				</Styles.Title>
				<Styles.UserDataContainer>
					<Input
						value={formBody?.nameInput}
						placeholder={ContactModalLocale.namePlaceholder}
						onChange={handleNameInputChange}
						error={errors?.nameInput}
					/>
					<Input
						value={formBody?.emailInput}
						placeholder={ContactModalLocale.emailPlaceholder}
						onChange={handleEmailInputChange}
						error={errors?.emailInput}
						onBlur={validateEmailInput}
					/>
				</Styles.UserDataContainer>
				<Input
					value={formBody?.titleInput}
					placeholder={ContactModalLocale.titlePlaceholder}
					onChange={handleTitleInputChange}
					error={errors?.titleInput}
				/>
				<Input
					type='textarea'
					value={formBody?.messageInput}
					placeholder={ContactModalLocale.messagePlaceholder}
					onChangeTextarea={handleMessageInputChange}
					error={errors?.messageInput}
				/>
				<Styles.ButtonContainer>
					<Button label={ContactModalLocale.sendButtonLabel} />
					{/* <input type='submit' value='Enviar' /> */}
				</Styles.ButtonContainer>
			</Styles.Form>
		</Modal>
	);
};

export default ContactModal;
