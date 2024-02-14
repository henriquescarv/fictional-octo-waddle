import styled, { css } from 'styled-components';

export const Head = styled.div``;

interface ExpansiveContentProps {
  isOpen: boolean,
  minHeight?: number,
}

export const ExpansiveContent = styled.div`
  ${({isOpen = false, minHeight}: ExpansiveContentProps) => css`
    height: ${!isOpen ? 0 : `${minHeight}px` || 'fit-content'};
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    transition: .2s ease-in-out;
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