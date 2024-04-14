import { Image } from '@shared/ui';
import styles from './Header.module.css';

export function Header({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.header} {...props}>
      <Image src="/logo.svg" alt="logo" customStyle={styles.logo} />
    </div>
  );
}

export default Header;
