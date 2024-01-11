import styled from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  background: ${defaultTheme.colors.background};
  padding: 32px;
  border-radius: 16px;
  left: 50%;
  top: 50%;
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const CloseButtonWrapper = styled.div`
  margin-top: -20px;
  margin-right: -20px;
  position: absolute;
  right: 0;
  float: right;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;