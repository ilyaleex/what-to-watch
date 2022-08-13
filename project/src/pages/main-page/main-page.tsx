import Footer from '../../components/ui/common/footer/footer';
import Header from '../../components/ui/common/header/header';
import PlayButton from '../../components/ui/play-button/play-button';
import FilmsList from '../../components/ui/films-list/films-list';
import {useAppSelector} from '../../hooks';
import GenreMenu from '../../components/ui/genre-menu/genre-menu';
import {useState} from 'react';
import ButtonShowMore from '../../components/ui/button-show-more/button-show-more';
import {FILMS_COUNT_PER_STEP} from '../../const';
import {selectFilterFilms} from '../../store/films-slice/selectors';
import {getPromo} from '../../store/promo-slice/selectors';
import {Film} from '../../types/film';
import ButtonFavorite from '../../components/ui/button-favorite/button-favorite';

function MainPage(): JSX.Element {
  const promo = useAppSelector(getPromo);
  const {id, name, genre, released, backgroundImage, posterImage, isFavorite} = promo;
  const [showCount, setShowCount] = useState(FILMS_COUNT_PER_STEP);
  const filteredFilms = useAppSelector(selectFilterFilms);
  const getFilmsList = (films: Film[]) => films.slice(0, showCount);

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

                <ButtonFavorite id={id} isFavorite={isFavorite}/>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreMenu changeShowCount={setShowCount}/>

          <div className="catalog__films-list">

            <FilmsList films={getFilmsList(filteredFilms)} />

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
