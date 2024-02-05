export type ButtonVariants = 'primary' | 'secondary' | 'text' | 'hiperlink' | 'submit';

export type ButtonProps = {
  type?: ButtonVariants,
  label: string | React.JSX.Element,
  disabled?: boolean,
  loading?: boolean,
  width?: number,
  onClick?: () => void,
};
