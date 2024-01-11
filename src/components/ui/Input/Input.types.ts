import { ChangeEvent } from 'react';

export type InputProps = {
  id?: string;
  type?: 'text' | 'textarea';
  value: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
