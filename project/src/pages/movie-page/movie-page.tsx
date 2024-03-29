import Header from '../../components/ui/common/header/header';
import Footer from '../../components/ui/common/footer/footer';
import {Link, Route, Routes, useParams} from 'react-router-dom';
import PlayButton from '../../components/ui/play-button/play-button';
import FilmsList from '../../components/ui/films-list/films-list';
import Overview from '../../components/ui/tabs/overview';
import Details from '../../components/ui/tabs/details';
import Reviews from '../../components/ui/tabs/reviews';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/auth-slice/selectors';
import {getErrorLoadFilm, getFilm, getIsLoadedFilm, getSimilarFilms} from '../../store/film-slice/selectors';
import {useEffect} from 'react';
import {fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction} from '../../services/api-action';
import ButtonFavorite from '../../components/ui/button-favorite/button-favorite';
import Loader from '../../components/ui/util-components/loader/loader';
import ServerError from '../server-error/server-error';

const FILMS_COUNT = 4;

function MoviePage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms).slice(0, FILMS_COUNT);
  const isLoading = useAppSelector(getIsLoadedFilm);
  const isErrorLoadFilm = useAppSelector(getErrorLoadFilm);

  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader/>;
  }

  if (isErrorLoadFilm) {
    return <ServerError/>;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{background: `${film.backgroundColor}`}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={'film-card__head'}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">


              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={film.id}/>
                <ButtonFavorite id={film.id} isFavorite={film.isFavorite}/>
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <Link to="review" className="btn film-card__button">Add review</Link>
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to="" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="details" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="reviews" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <Routes>
                <Route>
                  <Route index element={<Overview film={film}/>}/>
                  <Route path="details" element={<Details film={film}/>}/>
                  <Route path="reviews" element={<Reviews />}/>
                </Route>
              </Routes>

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">

            <FilmsList films={similarFilms}/>

          </div>
        </section>

        <Footer/>

      </div>
    </>
  );
}

export default MoviePage;
