import {Link} from 'react-router-dom';
import {FilmCardProps} from '../../types/film';
import VideoPlayer from '../videoplayer/videoplayer';

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => film.id}>
      <div className="small-film-card__image">
        <VideoPlayer film={film}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
