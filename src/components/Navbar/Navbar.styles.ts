import styled from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

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
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;

  p {
    user-select: none;
  }
`;
