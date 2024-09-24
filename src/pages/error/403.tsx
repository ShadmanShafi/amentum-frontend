import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants/routerPaths';

const { HOME } = ROUTER_PATHS;

const NoPermission = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={() => navigate(HOME.PATH)}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoPermission;
