import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../utils";
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setImagePopup: (state, action) => {
      state.imagePopup = action.payload;
    },
    addLike(state, actions) {
      state.like.push(actions.payload);
    },
    dislike(state, actions) {
      state.like = state.like.filter((item) => item.id !== actions.payload.id);
    },
    followUser(state, action) {
      state.follow.push(action.payload);
    },
    unfollowUser(state, action) {
      state.follow = state.follow.filter(
        (item) => item.id !== action.payload.id
      );
    },
    savePost(state, action) {
      state.savePost.push(action.payload);
    },
    unSavePost(state, action) {
      state.savePost = state.savePost.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    addComment: (state, action) => {
      state.comment.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.comment = state.comment.filter(
        (item) => item.id !== action.payload
      );
    },
    editComment: (state, action: PayloadAction<{ id: string; text: any }>) => {
      const { id, text } = action.payload;
      const task = state.comment.find((task) => task.id === id);
      if (task) {
        task.text = text;
        task.id = id;
      }
    },
  },
});

export const postAction = postSlice.actions;
export default postSlice.reducer;
