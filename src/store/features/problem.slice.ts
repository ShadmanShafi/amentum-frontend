// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import type { PostProblemResponseType, PutProblemResponseType } from 'typings/problem';
// import type { RootState } from '..';

// const problemInitialState: { data: PostProblemResponseType | PutProblemResponseType } = {
//   data: {} as unknown as PostProblemResponseType | PutProblemResponseType,
// };

// const problem = createSlice({
//   name: 'problem',
//   initialState: problemInitialState,
//   reducers: {
//     setProblem(state, actions: PayloadAction<PostProblemResponseType>) {
//       state.data = actions.payload;
//     },
//     updateSetProblem(state, action: PayloadAction<PutProblemResponseType>) {
//       state.data = action.payload;
//     },
//   },
// });

// export const { setProblem, updateSetProblem } = problem.actions;
// export const selectProblem = (state: RootState) => state.problem.data;
// export const { reducer: problemReducer } = problem;
