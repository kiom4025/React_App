import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const SubmissionSuccess = () => {
  const navigate = useNavigate();
  return(
  <Result
    status="success"
    title="Assignment Submitted Successfully"
    subTitle="Master the Art of Studying: Your Pathway to Success Awaits."
    extra={[
      <Button type="primary" key="console" onClick={()=>navigate('/')}>Go Home</Button>,
      <Button key="buy" onClick={()=>navigate('/assignments/upload')}>Submit Again</Button>,
    ]}
  />
  );
};
export default SubmissionSuccess;