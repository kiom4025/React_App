import React from 'react';
import { Col, Image, Row, Tabs } from 'antd';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import CompanyLogo from '../../assets/logo-web.png'
const onChange = (key) => {
    //   console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Login',
        children: (
            <LoginComponent />
        ),
    },
    {
        key: '2',
        label: 'Register',
        children: (
            <RegisterComponent />
        ),
    },
];
function Loginpage() {
    return (
        <Row  justify='center' align='middle' gutter={50} >
            <Col ><Image preview={false} src={CompanyLogo}/></Col>
            <Col ><Tabs defaultActiveKey="1" items={items} onChange={onChange} size='large' /></Col>
        </Row>
    )
}
export default Loginpage;