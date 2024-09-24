// import { message } from 'antd';

// import { coreServiceWithAuthApiSlice } from '@/store/middleware/bhogantiCore.middleware';
// import { setProblem, updateSetProblem } from '@/store/features/problem.slice';
// import { API_PATHS } from '@/constant/apiPaths';
// import type {
//   PostProblemRequestType,
//   PostProblemResponseType,
//   PutProblemRequestType,
//   PutProblemResponseType,
// } from 'typings/problem';

// const { REGISTER } = API_PATHS;

// export const problemApiSliceWithAuth =
//   coreServiceWithAuthApiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//       addProblem: builder.mutation<
//         PostProblemResponseType,
//         { data: PostProblemRequestType }
//       >({
//         query: (newProblem) => ({
//           url: `${PROBLEMS}`,
//           method: 'POST',
//           body: {
//             ...newProblem.data,
//           },
//         }),

//         async onQueryStarted(_, { dispatch, queryFulfilled }) {
//           try {
//             const { data } = await queryFulfilled;
//             dispatch(setProblem(data || {}));
//             message.success('Successful!');
//           } catch (err: any) {
//             console.log(err);
//           }
//         },
//       }),

//       updateProblem: builder.mutation<
//         PutProblemResponseType,
//         { id: number; data: PutProblemRequestType }
//       >({
//         query: ({ id, data }) => ({
//           url: `${PROBLEMS}/${id}`,
//           method: 'PUT',
//           body: {
//             ...data,
//           },
//         }),

//         async onQueryStarted(_, { dispatch, queryFulfilled }) {
//           try {
//             const { data } = await queryFulfilled;
//             dispatch(updateSetProblem(data || {}));
//             message.success('Successful');
//           } catch (err: any) {
//             console.log(err);
//           }
//         },
//       }),
//     }),
//   });

// export const { useAddProblemMutation, useUpdateProblemMutation } =
//   problemApiSliceWithAuth;
