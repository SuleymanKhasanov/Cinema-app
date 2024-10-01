import React from 'react';
import styles from './styles/MovieBanner.module.css';
import MovieCardActions from '../../features/MovieCardActions/MovieCardActions';
import { moviesGeners } from '../../app/assets/assets';
import { seriesGenere } from '../../app/assets/assets';

const MovieBanner = ({
  title,
  rating,
  poster,
  mediaType,
  genere,
}) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  // Найдем жанры по genre_ids
  const genreNames = genere.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  return (
    <div className={styles.movieBanner}>
      <div className={styles.movieBannerCard}>
        <img
          src={poster}
          alt={`poster by ${title}`}
          className={styles.movieBanerImg}
        />
        <div className={styles.movieInfo}>
          <MovieCardActions rating={rating} />
        </div>
      </div>
      <div className={styles.moveName}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieDescription}>
          {genreNames.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieBanner;
