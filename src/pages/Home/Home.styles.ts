import styled from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const HomeWrapper = styled.div`
`;

export const BasicInfosWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  gap: 20px;
  margin-top: 32px;
  padding: 128px 0 ;
  max-width: 1440px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftContainer = styled(Container)`
  margin-top: 64px
`;

export const RightContainer = styled(Container)`
  align-items: end;
`;

export const DotsContainer = styled.div`
  margin-right: 64px;

  svg {
    transform: rotate(45deg);
  }
`;

export const PreTitle = styled.h4`
  font-size: 24px;
  font-weight: 300;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 32px;
`;

export const Title = styled.h1`
  color: ${defaultTheme.colors.primary};
  font-size: 72px;
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${defaultTheme.colors.gray};
  font-size: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Circle = styled.div`
  background: ${defaultTheme.colors.primary};
  border-radius: 50%;
  height: 16px;
  min-width: 16px;
`;

export const PresentationContainer = styled.div`
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 8px;
  margin-top: 32px;
  max-width: 400px;
`;
