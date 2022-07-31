import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {changeGenre} from '../../store/action';
import {Link, useParams} from 'react-router-dom';
import {selectFilmGenres} from '../../store/select';
import {AppRoute} from '../../const';
import classNames from 'classnames';

const GENRES_COUNT = 9;

function GenreMenu(): JSX.Element {
  const genres = useAppSelector(selectFilmGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
  },[genreName, dispatch]);

  return (
    <ul className="catalog__genres-list">
      <li
        className={
          classNames(
            'catalog__genres-item',
            {'catalog__genres-item--active': !genreName})
        }
      >
        <Link
          to={AppRoute.Main}
          className="catalog__genres-link"
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li
            key={genre}
            className={
              classNames('catalog__genres-item',
                {'catalog__genres-item--active': genreName === genre.toLowerCase()})
            }
          >
            <Link
              to={`/genre/${genre.toLowerCase()}`}
              className="catalog__genres-link"
            >
              {genre}
            </Link>
          </li>
        )).slice(0, GENRES_COUNT)
      }
    </ul>
  );
}

export default GenreMenu;
