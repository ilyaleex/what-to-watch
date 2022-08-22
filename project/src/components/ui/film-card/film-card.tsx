import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import {Film} from '../../../types/film';
import classNames from 'classnames';

const PLAY_TIMEOUT = 1000;

const FILM_CARD_WIDTH = 270;

const FILM_CARD_HEIGHT = 175;

type FilmCardProps = {
  film: Film;
  activeCard: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, activeCard, onMouseEnter, onMouseLeave} = props;
  const {id, previewImage, previewVideoLink, name} = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeCard === id) {
        videoRef.current?.play();
      }
    },
    PLAY_TIMEOUT
    );

    if (activeCard !== id) {
      videoRef.current?.load();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeCard, id]);

  return (
    <article
      style={{cursor: 'pointer'}}
      className={
        classNames(
          'small-film-card',
          'catalog__films-card',
          {'active': activeCard === id}
        )
      }
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => navigate(`/films/${id}`)}
    >
      <div className="small-film-card__image">
        <video
          className="player__video"
          src={previewVideoLink}
          poster={previewImage}
          loop
          muted
          ref={videoRef}
          width={FILM_CARD_WIDTH}
          height={FILM_CARD_HEIGHT}
        />
      </div>

      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
