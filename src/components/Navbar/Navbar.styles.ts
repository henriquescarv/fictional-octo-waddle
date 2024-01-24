import styled, { keyframes } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
`;

export const Header = styled.header`
  background: ${defaultTheme.colors.background};
  min-height: 64px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${defaultTheme.devicesScreen.default};

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 16px;
  }
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;  
  display: flex;
  gap: 32px;

  p {
    user-select: none;
  }

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    display: none;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MobileSideMenu = styled.div`
  display: none;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    display: flex;
  }
`;

export const LocaleMobileWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  display: flex;

  svg {
    height: 64px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50vh;
`;

const logoFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

export const MobileLogoWrapper = styled.div`
  animation: ${logoFade} .5s;
  cursor: pointer;
`;

export const MobileNavbarButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`;