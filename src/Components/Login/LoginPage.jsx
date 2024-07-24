import React from 'react';
import { Col, Flex, Image, Row, Tabs } from 'antd';
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
        label: 'Sign Up',
        children: (
            <RegisterComponent />
        ),
    },
];
function Loginpage() {
    return (
        // <div>
        <Flex justify='center' align='center' style={{ minHeight: '100vh', margin: '2%' }}>
            <Row justify='center' align='middle' style={{ display: 'Flex', alignItems: 'center' }}>
                <Col ><Image preview={false} src={CompanyLogo} /></Col>
                <Col>
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                        // size='large' 
                        style={{ margin: '2%' }}
                    />
                </Col>
            </Row>
        </Flex>
        // </div>
    )
}
export default Loginpage;


/* 
Credits:
1. Align to the body center : https://stackoverflow.com/questions/6464592/how-to-align-entire-html-body-to-the-center
*/