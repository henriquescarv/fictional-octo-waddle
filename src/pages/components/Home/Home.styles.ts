import styled, { css } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const BasicInfosSection = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  // gap: 20px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 128px 0 ;
  max-width: 1140px;
`;

interface ScrollUpContainerProps {
  visible?: boolean,
}

export const ScrollUpContainer = styled.div`
  ${({visible = false}: ScrollUpContainerProps) => css`
    opacity: ${!visible && '0'};
    position: fixed;
    margin-top: 40vh;
    right: 1%;
    transition: .2s;

    button {
      cursor: ${!visible && 'auto'};
    }
  `}
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

export const TitleWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column-reverse;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
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
`;

export const Title = styled.h1`
  color: ${defaultTheme.colors.primary};
  font-size: 72px;
  font-weight: 600;
  max-width: 600px;
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

export const DefaultText = styled.div`
  font-size: 18px;

  p {
    color: ${defaultTheme.colors.gray};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 112px;
  width: 50%;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 112px;
`;

export const AboutMeWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export const AboutMeDescription = styled(DefaultText)`
  font-size: 20px;
`;

export const SkillsWrapper = styled(Wrapper)`
  min-width: 40%;
`;

export const SkillsCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  transition: height 0.1s ease-in-out;
`;

export const SkillsCardExpandButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SkillsCardExpandButtonProps {
  open: boolean,
}

export const SkillsCardExpandButton = styled.button`
  ${({open}: SkillsCardExpandButtonProps) => css`
    all: unset;
    cursor: pointer;
    transform: ${open && 'rotate(-180deg)'};
    padding: 8px;
    transition: 0.2s;
  `};
`;

export const Skill = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
`;

export const SkillText = styled.p`
  font-size: 24px;
  color: ${defaultTheme.colors.gray};
`;

export const LogoImage = styled.img`
  filter: brightness(0) invert(1);
  user-select: none;
  -webkit-user-drag: none;
  width: 40px;
`;