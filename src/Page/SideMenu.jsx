import React, { useState } from 'react';
import {
  DesktopOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  PlusCircleOutlined,
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
  getItem(<Link to="/">Courses</Link>, '1', <DesktopOutlined />),
  getItem(<Link to="/assignments">Assignments</Link>, '2', <UserOutlined />),
];
var isAdmin = true;

if(isAdmin) items.push(getItem(<Link to="/editContent">Add / Modify</Link>, '3', <PlusCircleOutlined />));

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  var collapseIcon = collapsed ? <RightOutlined /> : <LeftOutlined />;
  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
       
      <Button 
      type="text"
      block onClick={() => setCollapsed(!collapsed)} 
      style={{
        color:'white', 
        marginBottom:'5%'
        }}
      >
      {collapseIcon}
      </Button>
    </Sider>
  );
};
export default SideMenu;