export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'text',
  label: string | React.JSX.Element,
  onClick: () => void,
};
