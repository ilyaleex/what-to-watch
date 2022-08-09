import FilmCard from '../film-card/film-card';
import {Film} from '../../../types/film';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSetActive = (id: number) => setActiveCard(id);

  const handleSetNoActive = () => setActiveCard(null);

  return (
    <>
      {films.map((film) =>
        (
          <FilmCard
            key={film.id}
            film={film}
            activeCard={activeCard}
            onMouseEnter={handleSetActive}
            onMouseLeave={handleSetNoActive}
          />
        )
      )}
    </>
  );
}

export default FilmsList;
