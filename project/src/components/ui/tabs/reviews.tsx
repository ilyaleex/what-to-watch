import {CommentProps} from '../../../types/comment';
import dayjs from 'dayjs';
import {useAppSelector} from '../../../hooks';
import {getComments} from '../../../store/comments-slice/selectors';

const COMMENTS_IN_FIRST_COL = 3;

const getDateTime = (commentDate: string) => dayjs(commentDate).format('YYYY-MM-DD');
const getDateTimeWithMonth = (commentDate: string) => dayjs(commentDate).format('MMMM DD, YYYY');

function Review({comment}: CommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={getDateTime(comment.date)}>
            {getDateTimeWithMonth(comment.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

function Reviews(): JSX.Element {
  const comments = useAppSelector(getComments);

  return (
    <div className="film-card__reviews film-card__row">
      {
        comments ?
          <>
            <div className="film-card__reviews-col">
              {comments.slice(0, COMMENTS_IN_FIRST_COL).map((comment) => (
                <Review
                  key={comment.id}
                  comment={comment}
                />
              )
              )}
            </div>
            <div className="film-card__reviews-col">
              {comments.slice(COMMENTS_IN_FIRST_COL).map((comment) => (
                <Review
                  key={comment.id}
                  comment={comment}
                />
              )
              )}
            </div>
          </>
          :
          <p>No reviews yet</p>
      }

    </div>
  );
}

export default Reviews;
