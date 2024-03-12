import styled, { css } from 'styled-components';

export const Svg = styled.svg<{
  color: string,
  direction?: 'toRight' | 'toLeft' | 'toBottom' | 'toTop',
}>`
  ${({ color, direction = 'toRight' }) => css`
    fill: ${color};
    transform: ${direction==='toRight' && 'rotate(0deg)'};
    transform: ${direction==='toLeft' && 'rotate(180deg)'};
    transform: ${direction==='toBottom' && 'rotate(90deg)'};
    transform: ${direction==='toTop' && 'rotate(270deg)'};
  `};
`;
