import styled from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const FooterContainer = styled.div`
  border-top: 1px solid ${defaultTheme.colors.gray};
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${defaultTheme.devicesScreen.default};

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 48px 16px;
  }
`;

export const LogoButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContainer = styled.div`
  color: ${defaultTheme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MediaTitle = styled.h4`
  color: ${defaultTheme.colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const MediaButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const MediaButtonsImage = styled.img`
  width: 32px;
`;

export const CopyrightContainer = styled.div`
  color: ${defaultTheme.colors.gray};
  text-align: center;
  width: 100%;
`;