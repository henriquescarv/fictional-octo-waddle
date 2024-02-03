import styled, { css } from 'styled-components';
import defaultTheme from '../../../../assets/styles/deafultTheme';

export const Button = styled.button`
  width: 100%;
  all: unset;
  cursor: pointer;
  display: flex;

  &:hover {
    p {
      color: ${defaultTheme.colors.white};
    }
  }

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    font-size: 32px;
  }
`;

export const FloatMenuButton = styled.div`
  align-items: center;
  color: ${defaultTheme.colors.gray};
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: end;
  transition: 0.2s;
  width: 100%;

  &:hover {
    p {
      color: ${defaultTheme.colors.white};
    }
  }
`;

interface ToggleProps {
  isOpen: boolean;
}

export const Toggle = styled.div`
  ${({ isOpen }: ToggleProps) => css`
    transition: 0.2s;
    transform: ${isOpen && 'rotate(-180deg)'};
  `}
`;

export const Text = styled.p`
  color: ${defaultTheme.colors.gray};
  transition: 0.2s;
  
  &:hover {
    color: ${defaultTheme.colors.white};
  }
`;

export const Element = styled.div`
  svg {
    transition: 0.2s;
  }

  &:hover {
    color: ${defaultTheme.colors.white};

    svg {
      fill: ${defaultTheme.colors.white};
    }
  }
`;

export const Label = styled.div`
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

export const Bar = styled.span`
  color: ${defaultTheme.colors.secondary};
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    color: ${defaultTheme.colors.primary};
  }
`;

export const FloatMenuContainer = styled.div`
`;

export const FloatMenu = styled.div`
  width: 72px;
  background: ${defaultTheme.colors.background};
  border: 1px solid ${defaultTheme.colors.gray};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 4px;
  margin-top: 4px;
  position: absolute;
  right: 0;
`;
