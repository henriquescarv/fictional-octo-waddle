import styled from 'styled-components';
import defaultTheme from '../../../../assets/styles/deafultTheme';

export const CardImage = styled.img`
  border-radius: 16px 16px 0 0;
  max-width: 100%;
  height: auto;
  display: block;
  user-drag: none;
  user-select: none;
`;

export const DefaultText = styled.p`
  font-size: 18px;
  color: ${defaultTheme.colors.gray};
`;

export const CardInfoWrapper = styled.div`
  border-top: 1px solid ${defaultTheme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
