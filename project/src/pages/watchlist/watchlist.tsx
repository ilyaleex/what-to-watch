import Header from '../../components/ui/common/header/header';
import Footer from '../../components/ui/common/footer/footer';
import UserPageTitle from '../../components/ui/common/header/user-page-title';
import FilmsList from '../../components/ui/films-list/films-list';
import {useAppSelector} from '../../hooks';
import {getFilms} from '../../store/films-slice/selectors';

function Watchlist(): JSX.Element {
  const films = useAppSelector(getFilms);

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
