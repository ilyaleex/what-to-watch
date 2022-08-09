import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {AppRoute, FILMS_COUNT_PER_STEP} from '../../../const';
import classNames from 'classnames';
import {selectGenres} from '../../../store/films-slice/selectors';
import {changeGenre} from '../../../store/films-slice/films-slice';

const GENRES_COUNT = 9;

type GenreMenuProps = {
  changeShowCount: (value: number) => void;
}

const getGenreUrl = (genreName: string): string =>
  `${AppRoute.Genre}/${genreName.toLowerCase()}`;

function GenreMenu({changeShowCount}: GenreMenuProps): JSX.Element {
  const genres = useAppSelector(selectGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
    changeShowCount(FILMS_COUNT_PER_STEP);
  },[genreName, dispatch, changeShowCount]);

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
              to={getGenreUrl(genre)}
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
