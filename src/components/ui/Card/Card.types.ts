import { ButtonProps } from '../Button/Button.types';

export type CardProps = {
  title?: string,
  imageUrl?: string,
  description: string,
  button: ButtonProps,
  secondButton?: ButtonProps,
};