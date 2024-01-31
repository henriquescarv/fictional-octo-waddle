import React from 'react';
import { SectionProps } from './Section.types';
import * as Styles from './Section.styles';
import Button from '../../../../../components/ui/Button/Button';

const Section = ({ title, content, rightButton, sectionId }: SectionProps) => {
	return (
		<Styles.Section id={sectionId}>
			<Styles.SectionHead>
				<Styles.FlexWrapper>
					<Styles.SectionTitleBar>/</Styles.SectionTitleBar>
					<Styles.SectionTitle>
						{title}
					</Styles.SectionTitle>
				</Styles.FlexWrapper>
				<Styles.SectionTitleLine />
				{rightButton && (
					<Styles.ButtonWrapper>
						<Button
							type='text'
							label={rightButton.label}
							onClick={rightButton.onClick}
						/>
					</Styles.ButtonWrapper>
				)}
			</Styles.SectionHead>
			<Styles.ContentWrapper>
				{content}
			</Styles.ContentWrapper>
		</Styles.Section>
	);
};

export default Section;