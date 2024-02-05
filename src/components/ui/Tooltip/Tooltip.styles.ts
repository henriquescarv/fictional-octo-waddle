import styled, { keyframes } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const tooltipAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

export const Tooltip = styled.div`
  animation: ${tooltipAnimation} .2s;
  background: ${defaultTheme.colors.lightGray};
  border-radius: 4px;
  color: ${defaultTheme.colors.background};
  font-weight: 500;
  margin-top: -32px;
  max-width: 360px;
  overflow: hidden;
  padding: 4px 8px;
  position: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    font-size: 14px;
  }
`;