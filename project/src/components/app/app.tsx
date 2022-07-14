import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Watchlist from '../../pages/my-list/watchlist';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type MainPageFilmCardProps = {
  name: string;
  genre: string;
  releaseDate: number;
}

function App({name, genre, releaseDate}: MainPageFilmCardProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage name={name} genre={genre} releaseDate={releaseDate}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Watchlist />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Films}>
          <Route index element={<NotFound />}/>
          <Route path={AppRoute.FilmId}>
            <Route index element={<MoviePage />}/>
            <Route path={AppRoute.AddReview} element={<AddReview />}/>
          </Route>
        </Route>
        <Route path={AppRoute.Player} element={<Player />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
