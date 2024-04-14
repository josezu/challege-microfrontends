import classnames from 'classnames';

import styles from './Card.module.css';

import { Image, Text } from '../../atoms';

export interface CardProps {
  text: string;
  srcImage: string;
  customStyle?: string;
  type?: string;
}

export function Card({ text, customStyle, srcImage, type }: CardProps) {
  return (
    <div
      className={classnames(styles.card, styles[`${type}_bg`], customStyle)}
      data-testid="card"
    >
      <Image src={srcImage} customStyle={styles.image} />
      <Text text={text} customStyle={styles.text} />
    </div>
  );
}

export default Card;
