import styled, { css } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div``;

export const DefaultText = styled.div`
  font-size: 18px;

  p {
    color: ${defaultTheme.colors.gray};
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 112px;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    flex-direction: column-reverse;
    gap: 64px;
  }
`;

export const AboutMeWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (max-width: ${defaultTheme.devicesScreen.mobile}) {
    gap: 20px;
  }
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
  padding: 16px 16px 8px 16px;
`;

export const SkillsCardExpansiveList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
`;

interface SkillProps {
  open?: boolean,
}

export const Skill = styled.li`
  ${({open = true}: SkillProps) => css`
    align-items: center;
    display: ${open ? 'flex' : 'none'};
    gap: 8px;
    height: 40px;
    list-style: none;
  `};
`;

export const SkillText = styled.p`
  font-size: 24px;
  color: ${defaultTheme.colors.gray};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${defaultTheme.devicesScreen.tablet}) {
    margin-top: 32px;
  }
`;

export const LogoImage = styled.img`
  filter: brightness(0) invert(1);
  user-select: none;
  -webkit-user-drag: none;
  width: 40px;
  padding: 4px;
`;