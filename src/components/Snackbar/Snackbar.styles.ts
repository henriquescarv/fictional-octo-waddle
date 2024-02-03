import styled, { css } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

interface SnackbarProps {
  status: 'success' | 'problem'
  width: number,
  visible: boolean,
}

export const Snackbar = styled.div`
  ${({status, visible, width}: SnackbarProps) => css`
    align-items: center;
    background: ${status === 'success' && defaultTheme.colors.snackbarSuccess};
    background: ${status === 'problem' && defaultTheme.colors.snackbarProblem};
    border-radius: 8px;
    bottom: 0;
    color: ${defaultTheme.colors.white};
    display: flex;
    gap: 12px;
    margin: 16px;
    max-width: 450px;
    padding: 16px;
    position: fixed;
    right: ${visible ? 0 : `-${width + 80}px`};
    transition: right .4s;
    z-index: 3;

    svg {
      fill: ${defaultTheme.colors.white};
    }
  `};
`;
