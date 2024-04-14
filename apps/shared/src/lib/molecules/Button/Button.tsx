import classnames from 'classnames';

import styles from './Button.module.css';

import { Text } from '../../atoms';

export interface ButtonProps {
  text: string;
  customStyle?: string;
  onClick: () => void;
}

export function Button({ text, customStyle, onClick }: ButtonProps) {
  return (
    <div
      className={classnames(styles.button, customStyle)}
      data-testid="button"
      onClick={onClick}
    >
      <Text text={text} customStyle={styles.text} />
    </div>
  );
}

export default Button;
