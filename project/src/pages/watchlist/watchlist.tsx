import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import UserPageTitle from '../../components/common/header/user-page-title';
import FilmsList from '../../components/films-list/films-list';
import {useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/select';

function Watchlist(): JSX.Element {
  const films = useAppSelector(selectFilms);

  return (
    <div className="user-page">

      <Header className={'user-page__head'}>
        <UserPageTitle />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          <FilmsList films={films} />

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Watchlist;
