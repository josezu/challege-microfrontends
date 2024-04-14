import { Card } from '@shared/ui';
import styles from './List.module.css';
import { useFetchPokemon } from '@list/hooks/useFetchPokemon';

export function List() {
  const { items, isLoading, error } = useFetchPokemon();

  if (isLoading) return <p>Loading pokemons...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.list}>
      {items?.map((item) => (
        <Card
          key={item.name}
          srcImage={item.image}
          text={item.name}
          type={item.type}
          customStyle={styles.card}
        />
      ))}
    </div>
  );
}

export default List;
