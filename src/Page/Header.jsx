import { Avatar, Flex, Image, Layout, theme } from 'antd';
import CompanyLogo from "../assets/logo-web.png";
import ProfilePic from "../assets/vimeo-Profile Pic.jpg";
import UserDropdown from '../Components/UserMenu/UserDropdown';
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
      <Flex align='baseline' justify='space-between'>
        <Image height='40px' preview={false} src={CompanyLogo} style={{ marginLeft: '10px' }} />
        <Flex align='center' >
          <UserDropdown />
          <Avatar
            size='large'
            icon=<Image preview={false} src={ProfilePic} />
            style={{ marginRight: '20px' }}
          />
        </Flex>
      </Flex>
    </Header>
  );
};
export default PageHeader;