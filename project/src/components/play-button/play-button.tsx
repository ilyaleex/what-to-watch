import {useNavigate} from 'react-router-dom';

type PlayButtonProps = {
  id: number;
}

function PlayButton({id}: PlayButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => navigate(`/player/${id}`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
