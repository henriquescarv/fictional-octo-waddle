import React, { useEffect, useRef, useState } from 'react';
import { AccordionProps } from './Accordion.types';
import * as Styles from './Accordion.styles';
import ArrowBottomIcon from '../../../icons/ArrowBottomIcon/ArrowBottomIcon';

const Accordion = ({head, content, defaultOpen, onClickOpen}: AccordionProps) => {
	const [open, setOpen] = useState(true);
	const [heightEl, setHeightEl] = useState(0);
	const isOpen = (defaultOpen !== undefined && onClickOpen) ? defaultOpen : open;

	const handleExpand = () => {
		!!onClickOpen && onClickOpen(!defaultOpen) || setOpen(!open);
	};

	const ref = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const listHeight = ref.current && ref.current.scrollHeight;
		setHeightEl(listHeight || 0);
		handleExpand();
	}, []);

	return (
		<>
			<Styles.Head>
				{head}
			</Styles.Head>
			<Styles.ExpansiveContent ref={ref} height={isOpen ? heightEl : 0}>
				{content}
			</Styles.ExpansiveContent>
			<Styles.ExpandButtonContainer>
				<Styles.ExpandButton open={isOpen} onClick={() => handleExpand()}>
					<ArrowBottomIcon size='md'/>
				</Styles.ExpandButton>
			</Styles.ExpandButtonContainer>
		</>
	);
};

export default Accordion;
