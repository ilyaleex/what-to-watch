import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';

function FilmCard({id, name, previewImage}: Film): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => id}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
