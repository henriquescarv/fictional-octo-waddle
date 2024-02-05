import React, { useCallback, useState } from 'react';
import Modal from '../../../../../components/ui/Modal/Modal';
import { ContactModalProps } from './ContactModal.types';
import Input from '../../../../../components/ui/Input/Input';
import { Locales } from '../../../../../locales/locales.br';
import * as Styles from './ContactModal.styles';
import Button from '../../../../../components/ui/Button/Button';
import useValidator from '../../../../../hooks/useValidator/useValidator';
import Tooltip from '../../../../../components/ui/Tooltip/Tooltip';
import useSendContact from '../../../../../hooks/useSendContact/useSendContact';

const errorsDefault = {
	nameInput: '',
	emailInput: '',
	titleInput: '',
	messageInput: '',
};

const ContactModal = ({isOpen, onClose}: ContactModalProps) => {
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [titleInput, setTitleInput] = useState('');
	const [messageInput, setMessageInput] = useState('');
	const [errors, setErrors] = useState(errorsDefault);
	// max length pros inputs
	
	const ContactModalLocale = Locales.contactsModal;
	const { email } = useValidator();
	const { loading: sendMailLoading, sendEmail } = useSendContact();

	const validateEmailInput = () => {
		if (!(email(emailInput))) {
			setErrors({...errors, emailInput: ContactModalLocale.errors.email});
		} else {
			setErrors({...errors, emailInput: ''});
		}
	};
	
	const validateEmptyField = useCallback((field: string) => {
		switch (field) {
		case 'nameInput':
			if (!nameInput.length) {
				setErrors({ ...errors, nameInput: ContactModalLocale.errors.emptyField });
			} else {
				setErrors({...errors, nameInput: ''});
			}
			break;
		case 'titleInput':
			if (!titleInput.length) {
				setErrors({...errors, titleInput: ContactModalLocale.errors.emptyField});
			} else {
				setErrors({...errors, titleInput: ''});
			}
			break;
		case 'messageInput':
			if (!messageInput.length) {
				setErrors({...errors, messageInput: ContactModalLocale.errors.emptyField});
			} else {
				setErrors({...errors, messageInput: ''});
			}
			break;
		default:
		}
		console.log(errors);
	}, [nameInput, titleInput, messageInput, errors]);

	const checkForm = useCallback(() => {
		let isOk = false;

		isOk = email(emailInput)
		&& !!nameInput.length
		&& !!emailInput.length
		&& !!titleInput.length
		&& !!messageInput.length;

		return isOk;
	}, [nameInput, emailInput, titleInput, messageInput]);

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		Object.keys(errors).filter(key => key !== 'emailInput').map(key => validateEmptyField(key));
		e.preventDefault();

		const sendMail = async () => {
			const templateParams = {
				from_name: nameInput,
				from_email: emailInput,
				from_title: titleInput,
				message: messageInput,
			};

			await sendEmail({ templateParams: templateParams, handleExecute: onClose });
		};
		
		const noErrors = !!nameInput && !!emailInput && !!titleInput && !!messageInput
			&& !errors.nameInput.length && !errors.emailInput.length && !errors.titleInput.length && !errors.messageInput.length;

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
						value={nameInput}
						placeholder={ContactModalLocale.namePlaceholder}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameInput(e.target.value)}
						error={errors?.nameInput}
						onBlur={() => validateEmptyField('nameInput')}
						maxLength={75}
						disabled={sendMailLoading}
					/>
					<Input
						value={emailInput}
						placeholder={ContactModalLocale.emailPlaceholder}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
						error={errors?.emailInput}
						onBlur={validateEmailInput}
						maxLength={80}
						disabled={sendMailLoading}
					/>
				</Styles.UserDataContainer>
				<Input
					value={titleInput}
					placeholder={ContactModalLocale.titlePlaceholder}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleInput(e.target.value)}
					error={errors?.titleInput}
					onBlur={() => validateEmptyField('titleInput')}
					maxLength={80}
					disabled={sendMailLoading}
				/>
				<Input
					type='textarea'
					value={messageInput}
					placeholder={ContactModalLocale.messagePlaceholder}
					onChangeTextarea={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessageInput(e.target.value)}
					error={errors?.messageInput}
					onBlur={() => validateEmptyField('messageInput')}
					maxLength={320}
					disabled={sendMailLoading}
				/>
				<Styles.ButtonContainer>
					<Tooltip message={ContactModalLocale.errors.tooltip} disabled={checkForm()}>
						<Button label={ContactModalLocale.sendButtonLabel} disabled={!checkForm() || sendMailLoading} loading={sendMailLoading} width={104} />
					</Tooltip>
				</Styles.ButtonContainer>
			</Styles.Form>
		</Modal>
	);
};

export default ContactModal;
