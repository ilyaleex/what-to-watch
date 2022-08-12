import Footer from '../../components/ui/common/footer/footer';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {FormEvent, useState} from 'react';
import {loginAction} from '../../services/api-action';
import {getAuthorizationStatus, getError, getIsLoginSending} from '../../store/auth-slice/selectors';
import {setError} from '../../store/auth-slice/auth-slice';
import {signInValidator} from '../../utils/validation';

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const error = useAppSelector(getError);
  const isSending = useAppSelector(getIsLoginSending);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validError = signInValidator(email, password);

    if (validError) {
      dispatch(setError(validError));
    } else {
      dispatch(loginAction({login: email, password}));
    }
  };
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {
            error &&
            <div className="sign-in__message">
              <p>{error}</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                disabled={isSending}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                disabled={isSending}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={isSending}
            >
              {
                !isSending
                  ? 'Sign In'
                  : 'Sending...'
              }
            </button>
          </div>
        </form>
      </div>

      <Footer />

    </div>
  );
}

export default SignIn;
