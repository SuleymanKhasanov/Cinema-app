import React from 'react';
import styles from './ui/MovieBanner.module.css';
import MovieCardActions from '../../features/MovieCardActions/MovieCardActions';

const MovieBanner = ({ title, rating, poster }) => {
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
        <p className={styles.movieDescription}>Трейлер, Боевик</p>
      </div>
    </div>
  );
};

export default MovieBanner;
