import {Link} from 'react-router-dom';
import {FilmCardProps} from '../../../types/film';

function Breadcrumbs({film}: FilmCardProps): JSX.Element {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">

          <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>

        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
