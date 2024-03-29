import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../../const';
import {logoutAction} from '../../../../services/api-action';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getAuthorizationStatus, getAvatar} from '../../../../store/auth-slice/selectors';
import {PropsWithChildren} from 'react';

type HeaderProps = PropsWithChildren<{
  className?: string;
}>

function Header({className, children}: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const avatarUrl = useAppSelector(getAvatar);

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          (
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src={avatarUrl}
                    alt="User avatar"
                    width="63" height="63"
                    onClick={() => navigate(AppRoute.MyList)}
                  />
                </div>
              </li>
              <li className="user-block__item">
                <Link
                  className="user-block__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  to={AppRoute.Main}
                >
                  Sign out
                </Link>
              </li>
            </ul>
          ) :
          (
            <div className="user-block">
              <Link
                className="user-block__link"
                to={AppRoute.SignIn}
              >
                Sign in
              </Link>
            </div>
          )
      }

    </header>
  );
}

export default Header;
