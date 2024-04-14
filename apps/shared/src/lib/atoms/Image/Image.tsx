import classnames from 'classnames';

import styles from './Image.module.css';

export interface ImageProps {
  src: string;
  alt?: string;
  customStyle?: string;
}

export function Image({ src, alt, customStyle }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt ?? 'image'}
      className={classnames(styles.image, customStyle)}
      data-testid="image"
    />
  );
}

export default Image;
