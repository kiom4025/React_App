import './Layout.css';
import { Layout } from 'antd';
// import { theme } from 'antd';
import SideMenu from './SideMenu';
import PageContent from './Content';
import PageHeader from './Header';
import { LoginContextapi } from '../Components/Context/LoginContextapi';
import { useContext } from 'react';
import Loginpage from '../Components/Login/LoginPage';
const { Footer } = Layout;

const Mainlayout = () => {
  const { checkLogin } = useContext(LoginContextapi);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    (!checkLogin) ? <Loginpage /> :
      <Layout style={{ minHeight: '100vh' }} >
        <PageHeader />
        <Layout>
          <SideMenu />

          <Layout>
            <PageContent />
            <Footer style={{ textAlign: 'center' }}>
              Cloudline Technologies ©{new Date().getFullYear()} Created by Moki
            </Footer>
          </Layout>
        </Layout>
      </Layout>
  );
};
export default Mainlayout;