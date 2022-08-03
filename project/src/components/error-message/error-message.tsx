import {useAppSelector} from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (error)
    ?
    <div className="user-page">
      <p className="film-card__title">{error}</p>
    </div>
    :
    null;
}

export default ErrorMessage;
