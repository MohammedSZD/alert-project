import { X } from 'lucide-react';
import styles from './Alert.module.scss';
import type { IAlertProps } from '../interfaces/AlertProps';


const Alert = ({
  type = 'error',
  icon,
  title,
  description,
  children,
  onClose,
}: IAlertProps) => {
  return (
   <div className={`${styles.alert} ${styles[`alert-${type}`]}`}>
      <div className={styles.alertHeader}>
        <div className={styles.title}>
          {icon}
          <h4>{title}</h4>
        </div>
        {onClose && (
          <X size={20} className={styles.close} onClick={onClose} />
        )}
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
