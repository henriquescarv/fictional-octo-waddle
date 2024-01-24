import styled from 'styled-components';
import defaultTheme from '../../../../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const HomeSection = styled.section`
  margin: 0 auto;
  padding: 120px 0;
  max-width: ${defaultTheme.devicesScreen.default};

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 80px 16px;
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

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    font-size: 20px;
  }
`;

export const SectionTitle = styled.h3`
  color: ${defaultTheme.colors.white};
  font-size: 32px;
  font-weight: 500;
  user-select: none;
  white-space: nowrap;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    font-size: 20px;
  }
`;

export const SectionTitleLine = styled.div`
  border: 1px solid ${defaultTheme.colors.primary};
  width: 40%;
`;

export const ContentWrapper = styled(FlexWrapper)`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    flex-direction: column;
    gap: 64px;
  }
`;

export const ButtonWrapper = styled(Wrapper)`
  margin-left: auto;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    button {
      font-size: 16px;
      white-space: nowrap;
    }
  }
`;
