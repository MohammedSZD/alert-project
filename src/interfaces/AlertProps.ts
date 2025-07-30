import type { ReactNode } from 'react';

export interface IAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  icon?: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  onClose?: () => void;
}
