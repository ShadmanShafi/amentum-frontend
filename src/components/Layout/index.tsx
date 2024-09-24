import { Outlet } from 'react-router-dom';
import { Layout as AntLayout, Grid } from 'antd';

// import Logout from './Logout';
// import SideBar from './Sidebar';
// import AuthCard from './AuthCard';
// import HeaderBar from './Header';
// import UserProfile from './UserProfile';
// import AuthTemplate from './AuthTemplate';
// import FeedbackCard from './Feedback';

// import UserService from '@/store/apis/auth';

const { Header: AntHeader } = AntLayout;

const Layout = () => {
  // const token = UserService.getToken();

  const { useBreakpoint } = Grid;

  // const [collapsed, setCollapsed] = useState<boolean>(false);
  const screens = useBreakpoint();
  const { xl } = screens;

  return (
    <AntLayout className="row overflow-hidden" style={{ height: '100vh' }}>
      {xl ? (
        <div className="col-xl-3 col-xxl-2 bg-white  border-end">
          {/* <SideBar colla/psed={collapsed} setCollapsed={setCollapsed} /> */}
        </div>
      ) : (
        <></>
      )}

      <div className="col-xl-9 col-xxl-10 col-12 h-100 p-0">
        {!xl ? (
          // <HeaderBar />
          <div>HeaderBar</div>
        ) : (
          <>
            <AntHeader className="w-100 mb-2 px-3 shadow-0 d-flex bg-white border-bottom"></AntHeader>
          </>
        )}
        <div
          className="row h-100 container mx-auto mt-3"
          style={{ paddingBottom: `${!xl ? '158px' : '100px'}` }}
        >
          <div className={`col-12 col-lg-8 col-xl-9 overflow-auto h-100 `}>
            <Outlet />
          </div>

          {/* {lg ? (
            token ? (
              <div className="col-0 col-lg-4 col-xl-3 overflow-auto h-100">
                <div className="d-flex flex-column h-100 justify-content-between ">
                  <UserProfile />
                  <div className="d-flex gap-4 flex-column pt-4">
                    <FeedbackCard /> <Logout />
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-0 col-md-0 col-lg-4 col-xl-3 overflow-auto h-100 ">
                <AuthCard />
              </div>
            )
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </AntLayout>
  );
};

export default Layout;
