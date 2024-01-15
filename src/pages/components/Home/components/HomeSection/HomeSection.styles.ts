import styled from 'styled-components';
import defaultTheme from '../../../../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const HomeSection = styled.section`
  margin: 80px 0 160px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${defaultTheme.devicesScreen.default};

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 0 16px;
  }
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

export const SectionTitleBar = styled.span`
  color: ${defaultTheme.colors.primary};
  font-size: 32px;
  font-weight: 500;
  user-select: none;
`;

export const SectionTitle = styled.h3`
  color: ${defaultTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  user-select: none;
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
