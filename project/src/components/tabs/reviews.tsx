import {Comment, CommentProps} from '../../types/comment';
import dayjs from 'dayjs';

const COMMENTS_IN_FIRST_COL = 3;

type CommentsProps = {
  comments: Comment[]
}

function Review({comment}: CommentProps): JSX.Element {
  const DATE_TIME = dayjs(comment.date).format('YYYY-MM-DD');
  const DATE_TIME_FOR_STRING = dayjs(comment.date).format('MMMM DD, YYYY');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={DATE_TIME}>
            {DATE_TIME_FOR_STRING}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

function Reviews({comments}: CommentsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, COMMENTS_IN_FIRST_COL).map((comment) =>
          (
            <Review
              key={comment.id}
              comment={comment}
            />
          )
        )}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(COMMENTS_IN_FIRST_COL).map((comment) =>
          (
            <Review
              key={comment.id}
              comment={comment}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Reviews;