import React from 'react';

function AddReviewText(): JSX.Element {
  const [text, setText] = React.useState('');

  return (
    <textarea className="add-review__textarea" name="review-text" id="review-text"
      placeholder="Review text" onChange={(e) => setText(e.target.value)} value={text}
    >
    </textarea>
  );
}

export default AddReviewText;
