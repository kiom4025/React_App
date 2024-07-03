import { Layout, theme } from 'antd';
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
      
    </Header>
  );
};
export default PageHeader;