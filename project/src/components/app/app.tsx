import MainPage from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Watchlist from '../../pages/watchlist/watchlist';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils/common';
import HistoryRoute from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {getErrorLoadFilms, getLoadedFilmsDataStatus} from '../../store/films-slice/selectors';
import {getAuthorizationStatus} from '../../store/auth-slice/selectors';
import {getErrorLoadPromo, getLoadedPromoDataStatus} from '../../store/promo-slice/selectors';
import Loader from '../ui/util-components/loader/loader';
import ServerError from '../../pages/server-error/server-error';

function App(): JSX.Element {
  const isDataFilmsLoaded = useAppSelector(getLoadedFilmsDataStatus);
  const isDataPromoLoaded = useAppSelector(getLoadedPromoDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isErrorLoadFilms = useAppSelector(getErrorLoadFilms);
  const isErrorLoadPromo = useAppSelector(getErrorLoadPromo);

  if (isCheckedAuth(authorizationStatus) || isDataFilmsLoaded || isDataPromoLoaded) {
    return <Loader/>;
  }

  if (isErrorLoadFilms || isErrorLoadPromo) {
    return <ServerError/>;
  }

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.GenreName} element={<MainPage />}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <Watchlist />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Films}>
          <Route index element={<NotFound />}/>
          <Route path={AppRoute.FilmId} element={<MoviePage />}/>
          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={AppRoute.Player} element={<Player />}/>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
      </Routes>
    </HistoryRoute>
  );
}

export default App;
