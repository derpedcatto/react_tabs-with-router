import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <ul className="navbar-brand">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
