import Header from '../../components/ui/common/header/header';
import Footer from '../../components/ui/common/footer/footer';
import FilmsList from '../../components/ui/films-list/films-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavorites} from '../../services/api-action';
import {useEffect} from 'react';
import Loader from '../../components/ui/util-components/loader/loader';
import {getFavorites, getIsLoadedFavorites} from '../../store/favorite-slice/selectors';

function Watchlist(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavorites);
  const favoriteCount = favoriteFilms.length;
  const isLoading = useAppSelector(getIsLoadedFavorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="user-page">

      <Header className={'user-page__head'}>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteCount}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          <FilmsList films={favoriteFilms} />

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Watchlist;
