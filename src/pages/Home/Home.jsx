import MovieBanner from '../../widgets/MovieBanner/MovieBanner';
import MovieSmallBanner from '../../widgets/MovieSmallBanner/MovieSmallBanner';
import useFetchWeekTrending from '../../app/hooks/useFetchWeekTrending';
import useFetchPopularMovies from '../../app/hooks/useFetchPopularMovies';
import { sliderSettings } from '../../app/config/sliderSettings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './styles/Home.module.css';
import useFetchPopularSeries from '../../app/hooks/useFetchPopularSeries';
import useFetchTopRatedMovies from '../../app/hooks/useFetchTopRatedMovies';

const Home = () => {
  const weekTrending = useFetchWeekTrending();
  const popularMovies = useFetchPopularMovies();
  const popularSeries = useFetchPopularSeries();
  const topRatedMovies = useFetchTopRatedMovies();

  return (
    <section className={styles.topRatedMovies}>
      <h2 className={styles.topRatedMoviesTitle}>Последние тренды</h2>
      <Slider {...sliderSettings} className={styles.slickSlide}>
        {weekTrending?.length > 0 ? (
          weekTrending.map((element) => (
            <MovieBanner
              key={element.id}
              title={element.title || element.name}
              rating={element.vote_average}
              poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
              mediaType={element.media_type}
              genere={element.genre_ids}
            />
          ))
        ) : (
          <p>Что-то произошло не так</p>
        )}
      </Slider>
      <div className={styles.popularMovies}>
        <h2 className={styles.topRatedMoviesTitle}>
          Популярные фильмы
        </h2>
        <div className={styles.popularMoviesBlock}>
          {popularMovies?.length > 0 ? (
            popularMovies.map((element) => (
              <MovieSmallBanner
                key={element.id}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                mediaType={(element.media_type = 'movie')}
                genere={element.genre_ids}
              />
            ))
          ) : (
            <p>Что-то произошло не так</p>
          )}
        </div>
      </div>
      <div className={styles.popularMovies}>
        <h2 className={styles.topRatedMoviesTitle}>
          Популярные ТВ шоу
        </h2>
        <div className={styles.popularMoviesBlock}>
          {popularSeries?.length > 0 ? (
            popularSeries.map((element) => (
              <MovieSmallBanner
                key={element.id}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                mediaType={(element.media_type = 'tv')}
                genere={element.genre_ids}
              />
            ))
          ) : (
            <p>Что-то произошло не так</p>
          )}
        </div>
      </div>
      <div className="topRated">
        <h2 className={styles.topRatedMoviesTitle}>
          Фильмы Топ рейтинга
        </h2>
        <Slider {...sliderSettings} className={styles.slickSlide}>
          {topRatedMovies?.length > 0 ? (
            topRatedMovies.map((element) => (
              <MovieBanner
                key={element.id}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                mediaType={(element.media_type = 'movie')}
                genere={element.genre_ids}
              />
            ))
          ) : (
            <p>Что-то произошло не так</p>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Home;
