import styled, { css } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

interface WrapperProps {
  size?: 'sm' | 'lg'
}

export const Wrapper = styled.div`
  ${({ size = 'lg' }: WrapperProps) => css`
    color: ${defaultTheme.colors.secondary};
    user-select: none;
    font-size: ${size === 'lg' && '24px'};
    font-size: ${size === 'sm' && '16px'};
    font-weight: 600;

    @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
      font-size: 16px;
    }
  `}
`;