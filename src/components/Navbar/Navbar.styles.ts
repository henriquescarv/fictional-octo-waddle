import styled, { css, keyframes } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
`;

export const Header = styled.nav`
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
  margin-left: auto;

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
  height: 100%;
  gap: 20px;
`;

export const MobileSideMenu = styled.div`
  display: none;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    display: flex;
    margin-left: auto;
  }
`;

export const LocaleMobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  width: 100%;

  svg {
    height: 64px;
  }
`;

interface ModalWrapperProps {
  isOpen: boolean;
}

export const ModalWrapper = styled.div`
  ${({isOpen}: ModalWrapperProps) => css`
    background: ${defaultTheme.colors.background};
    clip-path: ${isOpen ? 'circle(100vh)' : 'circle(0 at 100% 0%)'};
    height: 100vh;
    left: 0;
    padding: 24px 16px 90px 16px;
    position: fixed;
    top: 0;
    transition: .5s ease-out;
    width: 100vw;

    @media (min-width: ${defaultTheme.devicesScreen.tablet}) {
      display: none;
    }
  `};
`;

export const CloseButtonWrapper = styled.div`
  margin-top: -20px;
  margin-right: -20px;
  position: absolute;
  right: 0;
  padding: 24px;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    margin-right: 0px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  user-select: none;

  &:hover {
    cursor: pointer;
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

export const MobileLogoButton = styled.button`
  background: none;
  border: none;
  animation: ${logoFade} 1s;
  cursor: pointer;
`;

export const MobileNavbarButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`;

export const BrandButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;

  svg {
    fill: ${defaultTheme.colors.gray};
    transition: fill 0.2s;
  }

  &:hover {
    svg {
      fill: ${defaultTheme.colors.white};
    }
  }
`;
