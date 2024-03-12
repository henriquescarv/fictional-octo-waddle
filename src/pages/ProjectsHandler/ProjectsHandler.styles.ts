import styled from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
  padding: 104px 0;
  max-width: ${defaultTheme.devicesScreen.default};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 16px;
  };
`;

export const ProjectsSection = styled.section`
  display: grid;
  gap: 64px 8px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%
  height: 70vh;

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 72px;
  };

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  };
`;

export const Head = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 72px;
  margin-top: 48px;
`;

export const Title = styled.h1`
  font-weight: 500;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    font-size: 24px;
  };
`;
