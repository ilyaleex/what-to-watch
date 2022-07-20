import React from 'react';
import AddReviewText from './add-review-text';

const STARS_AMOUNT = 10;

function AddReviewForm(): JSX.Element {
  return (
    <form action="#" className="add-review__form">
      <div className="rating">

        <div className="rating__stars">
          {Array.from({length: STARS_AMOUNT},(_, i) => {
            const idx = STARS_AMOUNT - i;
            return (
              <React.Fragment key={idx}>
                <input className="rating__input" id={`star-${idx}`} type="radio" name="rating" value={idx}/>
                <label className="rating__label" htmlFor={`star-${idx}`}>{`Rating ${idx}`}</label>
              </React.Fragment>
            );
          })}
        </div>

      </div>

      <div className="add-review__text">

        <AddReviewText />

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
