import { Breadcrumb, Flex } from 'antd';

import type { BreadcrumbItemType } from '@/typings/component';

interface PropsType {
  titles: BreadcrumbItemType[];
}

const DEFAULT = { title: 'Customer Portal' };

const CustomBreadcrumb = ({ titles }: PropsType) => {
  return (
    <Flex vertical gap={12} className="card-body p-4 bg-white border rounded-3">
      <Breadcrumb items={[DEFAULT, ...titles]} />
    </Flex>
  );
};

export default CustomBreadcrumb;
