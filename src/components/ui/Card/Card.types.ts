import { ReactNode } from 'react';

export type CardProps = {
  title?: string,
  variant?: 'primary' | 'secondary',
  titlePosition?: 'start' | 'end',
  children: ReactNode,
};