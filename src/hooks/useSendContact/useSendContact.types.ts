export type templateParamsProps = {
  from_name: string;
  from_email: string;
  from_title: string;
  message: string;
};

export type sendEmailProps = {
  templateParams: templateParamsProps;
  handleExecute?: () => void;
};
