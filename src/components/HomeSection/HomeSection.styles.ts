import styled, { css } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const HomeSectionWrapper = styled(Wrapper)`
  margin: 80px 0;
`;

export const FlexWrapper = styled(Wrapper)`
  display: flex;
`;

export const SectionHead = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  height: 100%;
  margin-bottom: 92px;
`;

interface SectionTitleProps {
  bar?: boolean,
}

export const SectionTitle = styled.h2`
  ${({bar}: SectionTitleProps) => css`
    color: ${bar ? defaultTheme.colors.primary : defaultTheme.colors.white};
    font-size: 32px;
    font-weight: 500;
    user-select: none;
  `};
`;

export const SectionTitleLine = styled.div`
  border: 1px solid ${defaultTheme.colors.primary};
  width: 44%;
`;

export const ContentWrapper = styled(FlexWrapper)`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const ButtonWrapper = styled(Wrapper)`
  margin-left: auto;
`;
