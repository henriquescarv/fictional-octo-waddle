export type FloatMenuOption = {
  label: string,
  handleClick: () => void,
};

export type NavbarButtonProps = {
  text?: string,
  floatMenuList?: FloatMenuOption[],
  handleClick?: () => void,
};
