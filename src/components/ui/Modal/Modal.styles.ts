import styled, { keyframes } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

const toLeftSlide = keyframes`
  from {
    left: 100vw;
  }
  to {
    left: 0;
  }
`;

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
  z-index: 2;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    animation: ${toLeftSlide} .2s;
  }
`;

export const Wrapper = styled.div`
  background: ${defaultTheme.colors.background};
  padding: 32px;
  border-radius: 16px;
  left: 50%;
  top: 50%;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    height: 100vh;
    width: 100vw;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    height: 100%;
  }
`;

export const CloseButtonWrapper = styled.div`
  margin-top: -20px;
  margin-right: -20px;
  position: absolute;
  right: 0;
  float: right;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    margin-top: 0px;
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