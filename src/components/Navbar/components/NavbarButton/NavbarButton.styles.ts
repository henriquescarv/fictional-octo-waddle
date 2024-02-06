import styled from 'styled-components';
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

export const Text = styled.p`
  color: ${defaultTheme.colors.gray};
  transition: 0.2s;
  
  &:hover {
    color: ${defaultTheme.colors.white};
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
