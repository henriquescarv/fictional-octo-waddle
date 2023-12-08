import styled from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: ${defaultTheme.colors.gray};
  font-size: 24px;
  font-weight: 500;
`;

export const Card = styled.div`
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 16px;
  width: 100%;
  margin-top: 8px;
`;

export const CardImage = styled.img`
  border-radius: 16px 16px 0 0;
  max-width: 100%;
  height: auto;
  display: block;
  user-drag: none;
  user-select: none;
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