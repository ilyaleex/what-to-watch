import React, {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {sendCommentAction} from '../../../services/api-action';
import {getCommentError, getIsSendingComment} from '../../../store/comments-slice/selectors';
import {DEFAULT_RATING, STARS_AMOUNT} from '../../../const';
import {useValidComment} from '../../../hooks/use-valid-review';

type ReviewFormType = {
  filmId: number
}

function ReviewForm({filmId}: ReviewFormType): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(getIsSendingComment);
  const error = useAppSelector(getCommentError);
  const isValidForm = useValidComment(text, rating);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendCommentAction({filmId, text, rating}));
  };

  const handleSetRating = (value: string) => {
    setRating(parseInt(value, STARS_AMOUNT));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      {
        error &&
        <div className="sign-in__message">
          <p>{error}</p>
        </div>
      }
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
            disabled={isSending || !isValidForm}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
