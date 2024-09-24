// import type React from 'react';
// import PropTypes from 'prop-types';

// import NoPermission from '@/pages/error/403';
// import UserService from '@/store/apis/auth';

// interface PropsType {
//   roles: string[];
//   showNotAllowed: boolean;
//   children: string | React.JSX.Element | React.JSX.Element[] | (() => React.JSX.Element);
// }

// const RenderOnRole = ({ roles, showNotAllowed, children }: PropsType) =>
//   UserService.hasRole(roles) ? (
//     (children as React.JSX.Element)
//   ) : showNotAllowed ? (
//     <NoPermission />
//   ) : null;

// RenderOnRole.propTypes = {
//   roles: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default RenderOnRole;
