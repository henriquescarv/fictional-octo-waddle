import { ButtonProps } from '../ui/Button/Button.types';

export type HomeSectionProps = {
  title: string,
  content: React.JSX.Element,
  rightButton?: ButtonProps,
}