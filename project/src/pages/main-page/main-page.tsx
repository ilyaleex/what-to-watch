import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import PlayButton from '../../components/play-button/play-button';
import FilmsList from '../../components/films-list/films-list';
import {useAppSelector} from '../../hooks';
import {selectFilterFilms} from '../../store/select';
import {useDispatch} from 'react-redux';
import GenreMenu from '../../components/genre-menu/genre-menu';
import {useEffect, useState} from 'react';
import {getFilmsList} from '../../store/action';
import {FilmsListProps} from '../../types/film';
import ButtonShowMore from '../../components/button-show-more/button-show-more';
import {FILMS_COUNT_PER_STEP} from '../../const';

function MainPage({films}: FilmsListProps): JSX.Element {
  const {id, name, genre, released, backgroundImage, posterImage} = films[0];
  const dispatch = useDispatch();
  const [showCount, setShowCount] = useState(FILMS_COUNT_PER_STEP);
  const filteredFilms = useAppSelector(selectFilterFilms);

  useEffect(() => {
    dispatch(getFilmsList());
  },[dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className={'film-card__head'}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">

              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">

                <PlayButton id={id}/>

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreMenu />

          <div className="catalog__films-list">

            <FilmsList films={filteredFilms.slice(0, FILMS_COUNT_PER_STEP)} />

          </div>
          <div className="catalog__more">
            {
              filteredFilms.length > showCount &&
              <ButtonShowMore
                showCount={showCount}
                changeShowCount={setShowCount}
              />
            }
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MainPage;
