export type AccordionProps = {
  head: React.JSX.Element;
  content: React.JSX.Element;
  defaultOpen?: boolean;
  onClickOpen?: (setOpen: boolean) => void;
}
