import {CommentsSlice} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchCommentsAction, sendCommentAction} from '../../services/api-action';

const initialState: CommentsSlice = {
  comments: [],
  isSending: false,
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.isSending = false;
        state.comments = action.payload;
      });
  }
});
