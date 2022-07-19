import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../const';

type Props = {
  children?: JSX.Element;
  className?: string;
}

function Header({children, className}: Props): JSX.Element {
  const navigate = useNavigate();

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {children}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={() => navigate(AppRoute.MyList)}/>
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
