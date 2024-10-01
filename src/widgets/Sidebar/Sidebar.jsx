import NavigationItem from '../../features/NavigatioItem/NavigationItem';
import styles from './styles/Sidebar.module.css';
import logo from './icons/logo.svg';
import menu from './icons/menu.svg';
import search from './icons/search.svg';
import movies from './icons/movies.svg';
import series from './icons/series.svg';
import anime from './icons/anime.svg';
import history from './icons/history.svg';
import { useState } from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom/cjs/react-router-dom.min';

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
            <Link to="/" className={styles.sidebarItemLink}>
              <NavigationItem logo={logo} text={'Prisma'} />
            </Link>
          </li>
          <li
            className={styles.sidebarItemLink}
            onClick={handdleShowMenu}
          >
            <NavigationItem logo={menu} text={'Меню'} />
          </li>
          <li className={styles.sidebarItem}>
            <NavLink
              to="/search"
              activeStyle={{ background: '#093205' }}
              className={styles.sidebarItemLink}
            >
              <NavigationItem logo={search} text={'Поиск'} />
            </NavLink>
          </li>
          <li className={styles.sidebarItem}>
            <NavLink
              to="/movies"
              activeStyle={{ background: '#093205' }}
              className={styles.sidebarItemLink}
            >
              <NavigationItem logo={movies} text={'Фильмы'} />
            </NavLink>
          </li>
          <li className={styles.sidebarItem}>
            <NavLink
              to="/series"
              activeStyle={{ background: '#093205' }}
              className={styles.sidebarItemLink}
            >
              <NavigationItem logo={series} text={'Сериалы'} />
            </NavLink>
          </li>
          <li className={styles.sidebarItem}>
            <NavLink
              to="/anime"
              activeStyle={{ background: '#093205' }}
              className={styles.sidebarItemLink}
            >
              <NavigationItem logo={anime} text={'Аниме'} />
            </NavLink>
          </li>
          <li className={styles.sidebarItem}>
            <NavLink
              to="/history"
              activeStyle={{ background: '#093205' }}
              className={styles.sidebarItemLink}
            >
              <NavigationItem
                logo={history}
                text={'История просмотров'}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
