import styles from './ui/MovieCardActions.module.css';

const MovieCardActions = ({ rating }) => {
  return (
    <>
      <span className={styles.movieRaiting}>
        {Number(rating.toFixed(1))}
      </span>
      <button className={styles.movieKebabMenu}>
        <span className={styles.dott}></span>
        <span className={styles.dott}></span>
        <span className={styles.dott}></span>
      </button>
    </>
  );
};

export default MovieCardActions;
