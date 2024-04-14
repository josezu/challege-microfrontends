import List from '@list/components/List';

import styles from './index.module.css';
import { useFetchPokemon } from '@list/hooks/useFetchPokemon';

export function Index() {
  return (
    <div className={styles.page}>
      <List />
    </div>
  );
}

export default Index;
