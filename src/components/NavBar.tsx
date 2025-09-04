import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <ul className="navbar-brand">
          <li className={classNames({ 'is-active': pathname === '/' })}>
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
          </li>

          <li className={classNames({ 'is-active': pathname === '/tabs' })}>
            <NavLink to="/tabs" className="navbar-item">
              Tabs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
