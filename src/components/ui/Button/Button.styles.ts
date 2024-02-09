import styled, { css } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

interface DefaultButtonProps {
  width?: number,
  disabled?: boolean,
  fullWidth?: boolean,
}

const SharedButtonStyles = styled.button`
  ${({disabled=false, fullWidth=false}: DefaultButtonProps) => css`
    all: unset;
    align-items: center;
    border-radius: 8px;
    cursor: ${!disabled && 'pointer'};
    gap: 8px;
    font-size: 20px;
    padding: 8px 16px;
    transition: .2s;
    user-select: none;
    width: ${fullWidth && '100%'};
  `};
`;

export const PrimaryButton = styled(SharedButtonStyles)`
  ${({width, disabled}: DefaultButtonProps) => css`
    background: ${!disabled ? defaultTheme.colors.buttonPrimary : defaultTheme.colors.gray};
    display: flex;
    justify-content: center;
    width: ${width && width + 'px'};

    &:hover {
      background: ${!disabled && defaultTheme.colors.buttonPrimaryHover};
    }
  `};
`;

export const SecondaryButton = styled(SharedButtonStyles)`
  border: 1px solid ${defaultTheme.colors.secondary};
  display: flex;
  justify-content: center;

  &:hover {
    background: ${defaultTheme.colors.buttonPrimary};
  }
`;

export const TextButton = styled(SharedButtonStyles)`
  display: flex;
  padding: 0;

  svg {
    transition: .2s;
  }

  &:hover {
    color: ${defaultTheme.colors.primary};

    svg {
      fill: ${defaultTheme.colors.primary};
    }
  }
`;

export const HiperlinkButton = styled(SharedButtonStyles)`
  padding: 0;
  color: ${defaultTheme.colors.primary};
  text-decoration: underline;
  user-select: auto;

  svg {
    transition: .2s;
    fill: ${defaultTheme.colors.primary};
  }

  &:hover {
    color: ${defaultTheme.colors.primaryLight};

    svg {
      fill: ${defaultTheme.colors.primaryLight};
    }
  }
`;
