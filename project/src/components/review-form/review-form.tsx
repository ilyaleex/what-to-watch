import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFilm} from '../../utils/common';

const STARS_AMOUNT = 10;

function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">

        <div className="rating__stars">
          {Array.from({length: STARS_AMOUNT},(_, i) => {
            const ratingValue = STARS_AMOUNT - i;

            return (
              <React.Fragment key={ratingValue}>
                <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={ratingValue}/>
                <label className="rating__label" htmlFor={`star-${ratingValue}`}>{`Rating ${ratingValue}`}</label>
              </React.Fragment>
            );
          })}
        </div>

      </div>

      <div className="add-review__text" style={{background: '#ffff'}}>

        <textarea className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text" onChange={(e) => setText(e.target.value)} value={text}
        />

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
