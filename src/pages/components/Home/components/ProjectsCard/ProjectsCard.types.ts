import { ButtonProps } from '../../../../../components/ui/Button/Button.types';

export type ProjectsCardProps = {
	title: string,
  imageUrl: string,
	imageAlt?: string,
	description: string,
	button: ButtonProps,
	secondButton?: ButtonProps,
}