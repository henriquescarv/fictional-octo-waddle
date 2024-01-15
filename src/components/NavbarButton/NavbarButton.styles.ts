import styled, { css } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

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
`;

export const FloatMenuButton = styled.div`
  color: ${defaultTheme.colors.gray};
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  justify-content: end;

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
`;

export const FloatMenuContainer = styled.div`
  position: relative;
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
