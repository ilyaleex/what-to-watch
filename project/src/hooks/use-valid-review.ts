import {useEffect, useState} from 'react';
import {CommentLength, DEFAULT_RATING} from '../const';

export const useValidComment = (comment: string, rating: number) => {
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const validComment =
      comment.length > CommentLength.Min &&
      comment.length < CommentLength.Max;

    if (validComment && rating > DEFAULT_RATING) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [comment, rating]);

  return isValidForm;
};
