import React from 'react';
import styles from './styles/MovieSmallBanner.module.css';
import MovieCardActions from '../../features/MovieCardActions/MovieCardActions';
import { moviesGeners } from '../../app/assets/assets';
import { seriesGenere } from '../../app/assets/assets';

const MovieSmallBanner = ({
  title,
  rating,
  poster,
  mediaType,
  genere,
}) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  const genreNames = genere.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  return (
    <div className={styles.movieSmallBanner}>
      <div className={styles.movieSmallBannerCard}>
        <img
          src={poster}
          alt={`poster by ${title}`}
          className={styles.movieSmallBanerImg}
        />
        <div className={styles.movieSmallInfo}>
          <MovieCardActions rating={rating} />
        </div>
      </div>
      <div className={styles.moveSmallName}>
        <h3 className={styles.movieSmallTitle}>{title}</h3>
        <p className={styles.movieSmallDescription}>
          {genreNames.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieSmallBanner;
