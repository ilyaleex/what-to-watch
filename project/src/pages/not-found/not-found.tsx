import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <p className="film-card__title">Not Found 404</p>
      <Link className="small-film-card__link" to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}

export default NotFound;
