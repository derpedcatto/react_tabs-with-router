import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
