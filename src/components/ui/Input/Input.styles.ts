import styled from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

export const Wrapper = styled.div`
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 8px;
  box-shadow: none;
  color: ${defaultTheme.colors.white};
  font-size: 16px;
  outline: none;
  padding: 8px;
  width: 100%;

  ::placeholder {
    color: ${defaultTheme.colors.gray};
    font-size: 16px;
  }
`;

export const InputTitleWrapper = styled.div`
  background: ${defaultTheme.colors.background};
  color: ${defaultTheme.colors.gray};
  font-size: 12px;
  margin-left: 12px;
  margin-top: -8px;
  padding: 0 2px;
  position: absolute;
  user-select: none;
`;

export const Textarea = styled.textarea`
  background: transparent;
  border: 1px solid ${defaultTheme.colors.gray};
  border-radius: 8px;
  box-shadow: none;
  color: ${defaultTheme.colors.white};
  font-size: 16px;
  height: 120px;
  outline: none;
  padding: 8px;
  resize: none;
  width: 100%;

  ::placeholder {
    color: ${defaultTheme.colors.gray};
    font-size: 16px;
  }
`;

export const InputError = styled.div`
  background: ${defaultTheme.colors.background};
  color: ${defaultTheme.colors.error};
  font-size: 12px;
  padding: 0px 2px;
  position: absolute;
`;