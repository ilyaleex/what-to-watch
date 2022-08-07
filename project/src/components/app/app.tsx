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
import LoadingScreen from '../ui/mid-components/loading-screen/loading-screen';
import {isCheckedAuth} from '../../utils/common';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getLoadedFilmsDataStatus} from '../../store/films-slice/selectors';
import {getAuthorizationStatus} from '../../store/auth-slice/selectors';
import {getLoadedPromoDataStatus} from '../../store/promo-slice/selectors';

function App(): JSX.Element {
  const isDataFilmsLoaded = useAppSelector(getLoadedFilmsDataStatus);
  const isDataPromoLoaded = useAppSelector(getLoadedPromoDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || isDataFilmsLoaded || isDataPromoLoaded) {
    return (
      <LoadingScreen />
    );
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
