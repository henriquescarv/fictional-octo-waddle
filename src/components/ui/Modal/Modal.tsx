import React, { useCallback, useEffect, useRef } from 'react';
import { ModalProps } from './Modal.types';
import * as Styles from './Modal.styles';
import CloseIcon from '../../../icons/CloseIcon/CloseIcon';

const Modal = ({isOpen, children, onClose}: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleOnClose = () => {
		document.body.style.overflow = 'unset';
		onClose();
	};

	const handleVerifyOutsideClick = useCallback(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				handleOnClose();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
	}, [onClose]);

	useEffect(() => {
		handleVerifyOutsideClick();
	}, [handleVerifyOutsideClick]);

	useEffect(() => {
		document.body.style.overflowY = 'hidden';
	}, [isOpen]);

	return (
		<Styles.Overlay>
			<Styles.Wrapper ref={modalRef}>
				<Styles.ContentWrapper>
					<Styles.CloseButtonWrapper>
						<Styles.CloseButton onClick={handleOnClose}>
							<CloseIcon />
						</Styles.CloseButton>
					</Styles.CloseButtonWrapper>
					{children}
				</Styles.ContentWrapper>
			</Styles.Wrapper>
		</Styles.Overlay>
	);
};

export default Modal;
