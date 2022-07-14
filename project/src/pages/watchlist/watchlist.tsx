import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import UserPageTitle from '../../components/common/header/user-page-title';

function Watchlist(): JSX.Element {
  return (
    <div className="user-page">

      <Header className={'user-page__head'}>
        <UserPageTitle/>
      </Header>


      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Watchlist;
