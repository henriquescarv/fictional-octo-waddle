import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}