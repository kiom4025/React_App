import React from 'react';
import { DownOutlined, SettingOutlined, LogoutOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
const { Text } = Typography;
const items = [
  {
    key: '1',
    label: 'Preference',
    icon: <SettingOutlined />,
  },
  {
    key: '2',
    label: 'Support',
    icon: <CustomerServiceOutlined />,
  },
  {
    key: '3',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];
const UserDropdown = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      //   defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>

        <Text code >Welcome Moki!</Text>
        <DownOutlined style={{ marginRight: '20px' }} />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default UserDropdown;