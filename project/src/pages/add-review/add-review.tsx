import Header from '../../components/common/header/header';
import Breadcrumbs from '../../components/common/header/breadcrumbs';
import ReviewForm from '../../components/review-form/review-form';
import {useParams} from 'react-router-dom';
import {getFilm} from '../../utils/common';

function AddReview(): JSX.Element {
  const {id} = useParams();
  const film = getFilm(id);

  return (
    <section className="film-card film-card--full" style={{background: `${film.backgroundColor}`}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs film={film}/>
        </Header>


        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
