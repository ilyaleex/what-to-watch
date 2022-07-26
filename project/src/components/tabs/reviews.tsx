import {Comment, CommentProps} from '../../types/comment';
import dayjs from 'dayjs';

type CommentsProps = {
  comments: Comment[]
}

function Review({comment}: CommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={dayjs(comment.date).format('YYYY-MM-DD')}>
            {dayjs(comment.date).format('MMMM DD, YYYY')}
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
        {comments.slice(0, 3).map((comment) =>
          (
            <Review
              key={comment.id}
              comment={comment}
            />
          )
        )}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(3, -2).map((comment) =>
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
