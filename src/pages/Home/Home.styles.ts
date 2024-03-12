import styled, { css, keyframes } from 'styled-components';
import defaultTheme from '../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

const buttonAnimation = keyframes`
  from {
    opacity: 0;
    margin-bottom: 70px;
  }
  to {
    opacity: 100%;
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled(Wrapper)`
  animation: ${buttonAnimation} 1s;
`;

export const BasicInfosSection = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 128px 0;
  max-width: ${defaultTheme.devicesScreen.default};

  @media (max-width: ${defaultTheme.devicesScreen.default}) {
    padding: 0 16px;
  }

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    gap: 36px;
    margin-top: 0;
  }
`;

export const BasicInfosWrapper = styled.div`
  display: flex;
  height: 100%;
  max-height: 620px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    gap: 80px;
    height: auto;
    margin-top: 16px;
  }
`;

interface ScrollUpContainerProps {
  visible?: boolean,
}

export const ScrollUpContainer = styled.div`
  ${({visible = false}: ScrollUpContainerProps) => css`
    opacity: ${!visible && '0'};
    position: fixed;
    margin-top: ${!visible ? '50vh' : '40vh'};
    right: 1%;
    transition: .2s;

    button {
      cursor: ${!visible && 'auto'};
    }

    @media (max-width: ${defaultTheme.devicesScreen.default}) {
      background: ${defaultTheme.colors.background};
      bottom: 0;
      right: 0;
      border-radius: 50% 0 0 0;
      box-shadow: 0 0 5px black;
      padding: 8px;
      margin-top: auto;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftContainer = styled(Container)`
  @media (min-width: ${defaultTheme.devicesScreen.tablet}) {
    margin-top: 64px
  }
`;

export const RightContainer = styled(Container)`
  align-items: end;
  overflow: hidden;
  padding: 18px 0;
`;

const dotsAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
    margin-right: -144px;
    transform: rotate(90deg);
  }
  100% {
    opacity: 100%;
    margin-right: 32px;
    transform: rotate(45deg);
  }
`;

export const DotsContainer = styled.div`
  animation: ${dotsAnimation} 3s;
  margin-right: 32px;
  transform: rotate(45deg);

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    svg {
      height: 72px;
    }
  }
`;

export const TitleWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column-reverse;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    font-size: 16px;
  }

  @media (max-height: 720px) {
    display: none;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 32px;
`;

export const AngleBracket = styled.span`
  color: ${defaultTheme.colors.primary};
  font-size: 72px;
  font-weight: 600;
  user-select: none;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    font-size: 36px;
  }
`;

export const TitleContainer = styled.div`
  height: 188px;
  max-width: 600px;

  h1 {
    color: ${defaultTheme.colors.primary};
    font-size: 72px;
    font-weight: 600;
  }

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    height: 96px;
    max-width: 420px;

    h1 {
      font-size: 36px;
    }
  }
`;

export const Text = styled.p`
  color: ${defaultTheme.colors.gray};
  font-size: 24px;
  font-weight: 300;

  em {
    color: ${defaultTheme.colors.gray};
    font-style: unset;
    font-weight: 700;
  }

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    margin-top: 32px;
  }
`;

export const Circle = styled.div`
  background: ${defaultTheme.colors.primary};
  border-radius: 50%;
  height: 16px;
  min-width: 16px;
`;

const presentationAnimation = keyframes`
  from {
    opacity: 0;
    margin-block-end: 90px;
  }
  to {
    opacity: 100%;
    margin-block-end: 0;
  }
`;

export const PresentationContainer = styled.div`
  animation: ${presentationAnimation} 2s;
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 8px;
  margin-top: 32px;
  max-width: 440px;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    max-width: 80%;
  }

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    max-width: 100%;
  }
`;

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
