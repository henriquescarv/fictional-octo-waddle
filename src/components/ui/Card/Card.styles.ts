import styled, { css } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
  width: 100%;
`;
interface TitleProps {
  textAlign?: string,
  variant?: string,
}

export const Title = styled.h4`
  ${({ variant='primary', textAlign='start' }: TitleProps) => css`
    color: ${defaultTheme.colors.gray};
    margin: ${variant === 'primary' ? 0 : '8px 12px'};
    font-size: ${variant === '24px' ? 0 : '18px'};
    font-weight: 500;
    text-align: ${textAlign};
  `};
`;

export const SecondaryWrapper = styled.div`
`;

export const LineBreak = styled.div`
  width: 100%;
  border: 1px solid ${defaultTheme.colors.gray}
`;

export const Card = styled.div`
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 16px;
  width: 100%;
  margin-top: 8px;
`;
