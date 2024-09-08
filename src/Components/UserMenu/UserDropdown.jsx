import React, { useContext } from 'react';
import { DownOutlined, SettingOutlined, LogoutOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography, message } from 'antd';
import { LoginContextapi } from '../Context/LoginContextapi';
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;



function UserDropdown() {
  const navigate = useNavigate();
  const { currentUser, Logout } = useContext(LoginContextapi);
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

  const handleMenuClick = (e) => {
    console.log('click', e);

    switch (e.key) {
      case '1':
        message.info('Click on Preference.');
        break;

      case '2':
        message.info('Click on Support.');
        break;

      case '3':
        navigate('/');
        Logout();
        break;

      default:
        // None for now
    }
  };
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        //   defaultSelectedKeys: ['3'],
        onClick: handleMenuClick,
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