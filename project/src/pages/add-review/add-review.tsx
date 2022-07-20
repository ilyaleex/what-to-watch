import Header from '../../components/common/header/header';
import Breadcrumbs from '../../components/common/header/breadcrumbs';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {Film} from '../../types/film';

type Props = {
  film: Film;
}

function AddReview({film}: Props): JSX.Element {
  const {backgroundImage, name, posterImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs />
        </Header>


        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
