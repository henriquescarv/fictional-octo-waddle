import { ChangeEvent } from 'react';

export type InputProps = {
  id?: string;
  type?: 'text' | 'textarea';
  error?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}
