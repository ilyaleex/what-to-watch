import MainPage from '../../pages/main-page/main-page';

type MainPageFilmCardProps = {
  name: string;
  genre: string;
  releaseDate: number;
}

function App({name, genre, releaseDate}: MainPageFilmCardProps): JSX.Element {
  return <MainPage name={name} genre={genre} releaseDate={releaseDate}/>;
}

export default App;
