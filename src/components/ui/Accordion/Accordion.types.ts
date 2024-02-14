export type AccordionProps = {
  head: React.JSX.Element;
  content: React.JSX.Element;
  defaultOpen?: boolean;
  minHeight?: number,
  onClickOpen?: (setOpen: boolean) => void;
}
