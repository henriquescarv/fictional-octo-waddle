import React from 'react';
import { HomeSectionProps } from './HomeSection.types';
import * as Styles from './HomeSection.styles';
import Button from '../../../../../components/ui/Button/Button';

const HomeSection = ({ title, content, rightButton }: HomeSectionProps) => {
	return (
		<Styles.HomeSection>
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
		</Styles.HomeSection>
	);
};

export default HomeSection;