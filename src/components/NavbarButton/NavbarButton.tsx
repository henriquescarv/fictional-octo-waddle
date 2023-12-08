import React, { useState, useEffect, useRef } from 'react';
import { NavbarButtonProps, FloatMenuOption } from './NavbarButton.types';
import * as Styles from './NavbarButton.styles';
import ArrowBottomIcon from '../../icons/ArrowBottomIcon/ArrowBottomIcon';

const NavbarButton = ({
	text,
	floatMenuList,
	handleClick,
}: NavbarButtonProps) => {
	const [selectedOption, setSelectedOption] = useState<FloatMenuOption | undefined>(undefined);
	const [isOpen, setIsOpen] = useState(false);

	const switchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (floatMenuList) {
			setSelectedOption(floatMenuList[0]);
		}
	}, []);

	function handleClickOutside(event: MouseEvent) {
		if (switchRef.current && !switchRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [switchRef]);

	const floatMenu = () => {
		const floatMenuOption = (option: FloatMenuOption) => {
			const handleOnClick = () => {
				option.handleClick();
				setIsOpen(false);
				setSelectedOption(option);
			};

			return (
				<Styles.Button onClick={handleOnClick} key={option.label}>
					<Styles.Text>{option.label}</Styles.Text>
				</Styles.Button>
			);
		};

		return (
			<Styles.FloatMenu>
				{floatMenuList?.map(option => floatMenuOption(option))}
			</Styles.FloatMenu>
		);
	};

	return (
		<>
			{floatMenuList ? (
				<Styles.FloatMenuContainer ref={switchRef}>
					<Styles.FloatMenuButton onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
						<Styles.Text>
							{selectedOption?.label}
						</Styles.Text>
						<Styles.Toggle isOpen={isOpen}>
							<ArrowBottomIcon />
						</Styles.Toggle> 
					</Styles.FloatMenuButton>
					{isOpen && floatMenu()}
				</Styles.FloatMenuContainer>
			) : (
				<Styles.Button onClick={handleClick}>
					<Styles.Bar>{'/'}</Styles.Bar>
					<Styles.Text>{text}</Styles.Text>
				</Styles.Button>
			)}
		</>
	);
};

export default NavbarButton;