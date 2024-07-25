import React, { useContext } from 'react';
import { DownOutlined, SettingOutlined, LogoutOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { LoginContextapi } from '../Context/LoginContextapi';
const { Text } = Typography;

function UserDropdown () {
  const {currentUser, Logout} =useContext(LoginContextapi);
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
      label: <Text onClick={Logout}>Logout</Text>,
      icon: <LogoutOutlined />,
    },
  ];
  return (
  <Dropdown
    menu={{
      items,
      selectable: true,
      //   defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
        <Text code >Welcome {currentUser}!</Text>
        <DownOutlined style={{ marginRight: '20px' }} />
      </Space>
    </Typography.Link>
  </Dropdown>
);
}
export default UserDropdown;