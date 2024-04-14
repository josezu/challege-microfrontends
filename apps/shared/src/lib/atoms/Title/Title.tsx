import classnames from 'classnames';

import styles from './Title.module.css';

export interface TitleProps {
  text: string;
  customStyle?: string;
}

export function Title({ text, customStyle }: TitleProps) {
  return (
    <h1 className={classnames(styles.title, customStyle)} data-testid="title">
      {text}
    </h1>
  );
}

export default Title;
