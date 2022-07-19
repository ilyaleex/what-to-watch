import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';

type FilmsListProps = {
  films: Films
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  return (
    <>
      {films.map((film) =>
        <FilmCard key={film.id} name={film.name} previewImage={film.previewImage} id={film.id}/>
      )}
    </>
  );
}

export default FilmsList;
