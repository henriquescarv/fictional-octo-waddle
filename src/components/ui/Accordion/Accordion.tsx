import React, { useState } from 'react';
import { AccordionProps } from './Accordion.types';
import * as Styles from './Accordion.styles';
import ArrowBottomIcon from '../../../icons/ArrowBottomIcon/ArrowBottomIcon';

const Accordion = ({head, content, defaultOpen, minHeight, onClickOpen}: AccordionProps) => {
	const [open, setOpen] = useState(true);
	const isOpen = (defaultOpen !== undefined && onClickOpen) ? defaultOpen : open;

	const handleExpand = () => {
		!!onClickOpen && onClickOpen(!defaultOpen) || setOpen(!open);
	};

	return (
		<>
			<Styles.Head>
				{head}
			</Styles.Head>
			<Styles.ExpansiveContent isOpen={isOpen} minHeight={minHeight && minHeight}>
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
