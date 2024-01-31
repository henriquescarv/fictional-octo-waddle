import { ButtonProps } from '../../../../../components/ui/Button/Button.types';

export type SectionProps = {
  title: string,
  content: React.JSX.Element,
  rightButton?: ButtonProps,
  sectionId?: string,
}