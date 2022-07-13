import {NavLink} from 'react-router-dom';

type Props = {
  breadcrumbs?: JSX.Element;
  userPageTitle?: JSX.Element;
  className?: string;
}

function Header({breadcrumbs, userPageTitle, className}: Props): JSX.Element {
  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {breadcrumbs}
      {userPageTitle}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <NavLink to='/myList'>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </NavLink>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
