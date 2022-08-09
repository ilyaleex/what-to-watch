import {FILMS_COUNT_PER_STEP} from '../../../const';

type ButtonShowMoreProps = {
  showCount: number
  changeShowCount: (count: number) => void
}

function ButtonShowMore({showCount, changeShowCount}: ButtonShowMoreProps): JSX.Element {
  return (
    <button
      className="catalog__button"
      type="button"
      onClick={() => changeShowCount(showCount + FILMS_COUNT_PER_STEP)}
    >Show more
    </button>
  );
}

export default ButtonShowMore;
