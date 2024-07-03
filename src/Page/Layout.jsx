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
      <PageContent/>
      </Layout>
    <Footer style={{ textAlign: 'center' }}>
          LMS ©{new Date().getFullYear()} Created by Moki
    </Footer>

  </Layout>
  );
};
export default Mainlayout;