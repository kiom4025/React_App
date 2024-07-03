import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LeftOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/dashboard">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link to="/courses">Courses</Link>, '2', <DesktopOutlined />),
  getItem(<Link to="/assignments">Assignments</Link>, '3', <UserOutlined />),
  getItem(<Link to="/Notes">Notes</Link>, '4', <FileOutlined/>),
  getItem(<Link to="/Teams">Teams</Link>, 'sub1', <TeamOutlined />, 
    [
    getItem(<Link to="/Team1">Team1</Link>, '6'), 
    getItem(<Link to="/Team2">Team2</Link>, '7')
    ]),
  getItem(<Link to={"settings"}>Settings</Link>, '8', <SettingOutlined />),
];
const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      {/* <div className="demo-logo-vertical" /> */}
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

      <Button 
      type="text"
      block onClick={() => setCollapsed(!collapsed)} 
      style={{
        color:'white', 
        marginBottom:'5%'
        }}
      >
      <LeftOutlined />
      </Button>
    </Sider>
  );
};
export default SideMenu;