import styled from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

const SharedButtonStyles = styled.button`
  all: unset;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  transition: .2s;
  user-select: none;
`;

export const PrimaryButton = styled(SharedButtonStyles)`
  background: ${defaultTheme.colors.buttonPrimary};

  &:hover {
    background: ${defaultTheme.colors.buttonPrimaryHover};
  }
`;

export const SecondaryButton = styled(SharedButtonStyles)`
  border: 1px solid ${defaultTheme.colors.secondary};

  &:hover {
    background: ${defaultTheme.colors.buttonPrimary};
  }
`;

export const TextButton = styled(SharedButtonStyles)`
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
