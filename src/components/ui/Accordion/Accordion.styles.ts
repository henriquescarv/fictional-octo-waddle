import styled, { css } from 'styled-components';

export const Head = styled.div``;

interface ExpansiveContentProps {
  height: number | null,
}

export const ExpansiveContent = styled.ul`
  ${({height = 264}: ExpansiveContentProps) => css`
    height: ${height}px;
    opacity: ${height ? 1 : 0};
    transition: 0.1s ease-in-out;
  `};
`;

export const ExpandButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ExpandButtonProps {
  open: boolean,
}

export const ExpandButton = styled.button`
  ${({open}: ExpandButtonProps) => css`
    all: unset;
    cursor: pointer;
    transform: ${open && 'rotate(-180deg)'};
    padding: 8px;
    transition: 0.2s;
  `};
`;