import NavigationItem from '../../features/NavigatioItem/NavigationItem';
import styles from './ui/Sidebar.module.css';
import logo from './ui/icons/logo.svg';
import menu from './ui/icons/menu.svg';
import search from './ui/icons/search.svg';
import movies from './ui/icons/movies.svg';
import series from './ui/icons/series.svg';
import anime from './ui/icons/anime.svg';
import history from './ui/icons/history.svg';
import { useState } from 'react';

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handdleShowMenu = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    <div
      className={styles.sidebar}
      style={{ width: toggleMenu ? '250px' : '70px' }}
    >
      <nav className={styles.sidebarNavigation}>
        <ul className={styles.sidebarMenu}>
          <li className={styles.sidebarItem}>
            <NavigationItem logo={logo} text={'Prisma'} />
          </li>
          <li
            className={styles.sidebarItem}
            onClick={handdleShowMenu}
          >
            <NavigationItem logo={menu} text={'Меню'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavigationItem logo={search} text={'Поиск'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavigationItem logo={movies} text={'Фильмы'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavigationItem logo={series} text={'Сериалы'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavigationItem logo={anime} text={'Аниме'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavigationItem
              logo={history}
              text={'История просмотров'}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
