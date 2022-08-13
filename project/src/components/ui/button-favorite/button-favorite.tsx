import {useAppDispatch, useAppSelector} from '../../../hooks';
import {selectFavoritesCount} from '../../../store/films-slice/selectors';
import {addToFavorite} from '../../../services/api-action';

type ButtonFavoriteProps = {
  id: number
  isFavorite: boolean
}

function ButtonFavorite({id, isFavorite}: ButtonFavoriteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteCount = useAppSelector(selectFavoritesCount);

  const handleAddToFavorite = () => {
    const status = +!isFavorite;
    dispatch(addToFavorite({id, status}));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleAddToFavorite}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          isFavorite
            ? <use xlinkHref="#in-list"/>
            : <use xlinkHref="#add"/>
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteCount}</span>
    </button>
  );
}

export default ButtonFavorite;
