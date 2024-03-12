import styled from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const DefaultText = styled.div`
  font-size: 18px;

  p {
    color: ${defaultTheme.colors.gray};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 112px;
  justify-content: space-between;
  margin-bottom: 72px;
  width: 50%;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    width: 100%;
  }
`;

export const AboutMeDescription = styled(DefaultText)`
  font-size: 20px;
`;