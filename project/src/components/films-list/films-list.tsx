import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <>
      {films.map((film) =>
        (
          <FilmCard
            key={film.id}
            film={film}
          />
        )
      )}
    </>
  );
}

export default FilmsList;
