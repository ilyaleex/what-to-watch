import {useAppDispatch, useAppSelector} from '../../../hooks';
import {selectFavoritesCount} from '../../../store/films-slice/selectors';
import {addToFavorite} from '../../../services/api-action';
import {AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/auth-slice/selectors';

type ButtonFavoriteProps = {
  id: number
  isFavorite: boolean
}

function ButtonFavorite({id, isFavorite}: ButtonFavoriteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteCount = useAppSelector(selectFavoritesCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleAddToFavorite = () => {
    const status = +!isFavorite;
    dispatch(addToFavorite({id, status}));
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
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
      :
      null
  ) as JSX.Element;
}

export default ButtonFavorite;
