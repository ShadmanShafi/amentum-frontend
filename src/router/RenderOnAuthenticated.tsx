// import type React from 'react';
// import UserService from '@/store/apis/auth';

// interface PropsType {
//   children: string | React.JSX.Element | React.JSX.Element[] | (() => React.JSX.Element);
// }

// const RenderOnAuthenticated = ({ children }: PropsType) => {
//   if (!UserService.isLoggedIn()) UserService.doLogin();

//   return UserService.isLoggedIn() ? (children as React.JSX.Element) : null;
// };

// export default RenderOnAuthenticated;
