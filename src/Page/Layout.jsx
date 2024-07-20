import './Layout.css';
import { Layout } from 'antd';
// import { theme } from 'antd';
import SideMenu from './SideMenu';
import PageContent from './Content';
import PageHeader from './Header';
const { Footer } = Layout;

const Mainlayout = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
  <Layout style={{minHeight: '100vh'}}> 
    <PageHeader/>
      <Layout>
      <SideMenu/>
      
      <Layout>
      <PageContent/>
      <Footer style={{ textAlign: 'center' }}>
    Cloudline Technologies ©{new Date().getFullYear()} Created by Moki
    </Footer>
      </Layout>
      </Layout>
    

  </Layout>
  );
};
export default Mainlayout;