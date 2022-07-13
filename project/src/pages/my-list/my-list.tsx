import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import FilmCard from '../../components/film-card/film-card';

function MyList(): JSX.Element {
  return (
    <div className="user-page">

      <Header className={'user-page__head'}
        userPageTitle={
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        }
      />


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

export default MyList;
