import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import cls from 'classnames';

import styles from './loading.module.scss';

// import NavIcon from '@/assets/Icons/NavIcon';
// import { IconNoData } from '@/assets/Icons/IconNoData';

// export const HeaderLoading = () => {
//   return (
//     <div className="card p-4  ">
//       <div className="d-flex flex-wrap gap-3 justify-content-between">
//         <Skeleton.Input active size="small" />

//         <div className="d-flex  flex-wrap gap-3">
//           <Skeleton.Button active size="small" />
//           <Skeleton.Button active size="small" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const DataCardLoading = () => (
//   <div className="d-flex flex-column gap-4">
//     <div className="row g-4 flex-wrap">
//       {[1, 2, 3, 4].map(() => (
//         <div className="col-lg-3 col-md-6 col-12">
//           <div className="card p-4">
//             <Skeleton paragraph={{ rows: 2 }} />
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export const CardLoading = () => (
//   <div className="card p-4 d-flex gap-4">
//     <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
//       <Skeleton.Avatar active size="large" />
//       <div className="d-flex flex-wrap gap-2">
//         <Skeleton.Button active size="small" />
//         <Skeleton.Button active size="small" />
//       </div>
//     </div>

//     <Skeleton active title={false} paragraph={{ rows: 3 }} />

//     <Skeleton.Avatar active shape="square" size={64} />
//   </div>
// );

// export const ProblemCardLoading = ({ classNames }: { classNames?: string }) => (
//   <div
//     className={`d-flex justify-content-center gap-2 card border bg-light-subtle p-4 rounded-3 mt-2 text-center ${classNames}`}
//   >
//     <div>
//       <IconNoData />
//     </div>
//     <div>কোন ভোগান্তি খুঁজে পাওয়া যায় নেই।</div>
//   </div>
// );

const Loading = () => (
  <div className={cls(styles.loading, 'loading')}>
    {/* <BhogantiNavIcon width="250" /> */}
    <Spin
      size="large"
      className="ps-3 text-primary"
      indicator={<LoadingOutlined spin />}
    />
  </div>
);

export default Loading;
