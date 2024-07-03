import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const SubmissionSuccess = () => (
  <Result
    status="success"
    title="Assignment Submitted Successfully"
    // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console"><Link to="/dashboard">Go Home</Link></Button>,
      <Button key="buy"><Link to="/assignments/upload">Submit Again</Link></Button>,
    ]}
  />
);
export default SubmissionSuccess;