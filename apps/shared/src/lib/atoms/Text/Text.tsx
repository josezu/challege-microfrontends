import classnames from 'classnames';

import styles from './Text.module.css';

export interface TextProps {
  text: string;
  customStyle?: string;
}

export function Text({ text, customStyle }: TextProps) {
  return (
    <p className={classnames(styles.text, customStyle)} data-testid="text">
      {text}
    </p>
  );
}

export default Text;
