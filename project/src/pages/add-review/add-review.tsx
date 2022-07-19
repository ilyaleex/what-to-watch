import Header from '../../components/common/header/header';
import Breadcrumbs from '../../components/common/header/breadcrumbs';
import AddReviewForm from '../../components/add-review-form/add-review-form';

function AddReview(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs />
        </Header>


        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
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
