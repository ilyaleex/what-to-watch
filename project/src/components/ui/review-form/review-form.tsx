import React, {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {sendCommentAction} from '../../../services/api-action';
import {getIsSendingComment} from '../../../store/comments-slice/selectors';

const STARS_AMOUNT = 10;

const DEFAULT_RATING = 0;

type ReviewFormType = {
  filmId: number
}

function ReviewForm({filmId}: ReviewFormType): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(getIsSendingComment);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendCommentAction({filmId, text, rating}));
  };

  const handleSetRating = (value: string) => {
    setRating(parseInt(value, STARS_AMOUNT));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">

        <div className="rating__stars">
          {Array.from({length: STARS_AMOUNT},(_, i) => {
            const ratingValue = STARS_AMOUNT - i;

            return (
              <React.Fragment key={ratingValue}>
                <input
                  className="rating__input"
                  id={`star-${ratingValue}`}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  disabled={isSending}
                  onChange={(e) => handleSetRating(e.target.value)}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${ratingValue}`}
                >
                  {`Rating ${ratingValue}`}
                </label>
              </React.Fragment>
            );
          })}
        </div>

      </div>

      <div className="add-review__text" style={{background: '#ffff'}}>

        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          disabled={isSending}
        />

        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isSending}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
