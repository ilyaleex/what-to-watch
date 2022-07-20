import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import {Link} from 'react-router-dom';
import PlayButton from '../../components/play-button/play-button';
import FilmsList from '../../components/films-list/films-list';
import {Film, Films} from '../../types/film';
import FilmCardDescription from '../../components/film-card-description/film-card-description';

type Props = {
  films: Films;
  filmHeader: Film,
}

function MoviePage({filmHeader, films}: Props): JSX.Element {
  const {id, name, genre, backgroundImage, posterImage, released} = filmHeader;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={'film-card__head'}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmCardDescription id={id} name={name} genre={genre} released={released} />
              {/*<h2 className="film-card__title">{name}</h2>*/}
              {/*<p className="film-card__meta">*/}
              {/*  <span className="film-card__genre">{genre}</span>*/}
              {/*  <span className="film-card__year">{released}</span>*/}
              {/*</p>*/}

              <div className="film-card__buttons">

                <PlayButton />

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>

                <Link to="review" className="btn film-card__button">Add review</Link>

              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying
                  the
                  sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously,
                  Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
                </p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">

            <FilmsList films={films}/>

          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MoviePage;
