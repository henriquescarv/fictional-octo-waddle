import styled from 'styled-components';
import defaultTheme from '../../../../assets/styles/deafultTheme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    width: auto;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    font-size: 16px;
  }
`;

export const Container = styled.div``;

export const ButtonContainer = styled(Container)`
  align-self: center;
`;

export const UserDataContainer = styled(Container)`
  display: flex;
  gap: 16px;
`;