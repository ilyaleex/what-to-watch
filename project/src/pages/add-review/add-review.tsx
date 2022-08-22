import Header from '../../components/ui/common/header/header';
import Breadcrumbs from '../../components/ui/common/header/breadcrumbs';
import ReviewForm from '../../components/ui/review-form/review-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getErrorLoadFilm, getFilm, getIsLoadedFilm} from '../../store/film-slice/selectors';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchFilmAction} from '../../services/api-action';
import Loader from '../../components/ui/util-components/loader/loader';
import ServerError from '../server-error/server-error';

function AddReview(): JSX.Element {
  const film = useAppSelector(getFilm);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadedFilm);
  const isErrorLoadFilm = useAppSelector(getErrorLoadFilm);

  useEffect(() => {
    dispatch(fetchFilmAction(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader/>;
  }

  if (isErrorLoadFilm) {
    return <ServerError/>;
  }

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
        <ReviewForm filmId={film.id}/>
      </div>

    </section>
  );
}

export default AddReview;
