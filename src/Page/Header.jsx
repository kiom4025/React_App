import { Image, Layout, theme } from 'antd';
import CompanyLogo from "../assets/logo-web.png";
const { Header } = Layout;

const PageHeader = () => {
  const {
    token: { colorBgContainer },
    // token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      <Image height='40px' preview={false} src={CompanyLogo} style={{marginLeft:'10px'}}/>
    </Header>
  );
};
export default PageHeader;