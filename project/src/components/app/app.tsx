import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Watchlist from '../../pages/watchlist/watchlist';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Films, Film} from '../../types/film';

type MainPageFilmCardProps = {
  promoFilm: Film;
  filmHeader: Film;
  films: Films;
  film: Film;
}

function App({promoFilm, filmHeader, films, film}: MainPageFilmCardProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} films={films} />}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Watchlist films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Films}>
          <Route index element={<NotFound />}/>
          <Route path={AppRoute.FilmId}>
            <Route index element={<MoviePage filmHeader={filmHeader} films={films} />}/>
            <Route path={AppRoute.AddReview} element={<AddReview film={film}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.Player} element={<Player film={film} />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
