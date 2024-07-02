import './Layout.css';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
  <Layout style={{minHeight: '100vh'}}> 

    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      
    </Header>

    <Layout>
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

      <Content
        style={{
          margin: '1%',
        }}>
        This is content page
      </Content>
    </Layout>

    <Footer style={{ textAlign: 'center' }}>
          LMS ©{new Date().getFullYear()} Created by Moki
    </Footer>

  </Layout>
  );
};
export default Mainlayout;