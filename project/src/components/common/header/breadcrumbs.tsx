import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

function Breadcrumbs(): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">

          <Link to={AppRoute.Film} className="breadcrumbs__link">The Grand Budapest Hotel</Link>

        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
